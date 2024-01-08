'use server'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function getEmployeeAttendancesByCategoryAndDate(category_employee_id, date) {
    const employees = await prisma.employees.findMany({
        include: {
            attendances: {
                where: {
                    date: (new Date(date)).toISOString()
                }
            }
        },
        where: {
            category_employee_id: parseInt(category_employee_id)
        }
    })
    return employees

}

export async function insertOrUpdate(formData) {
    try {
        const formDataEntries = formData.entries();

        const formDataArray = Array.from(formDataEntries);

        const employees = formData.getAll('employees[][employee_id]')
        const kehadiran = formDataArray
            .filter(([name]) => name.startsWith('kehadiran'))
            .map(([, value]) => value);
        const create_employees = []
        employees.forEach(async (employee, index) => {
            create_employees.push({
                employee_id: parseInt(employee),
                kehadiran: kehadiran[index],
                date: new Date(formData.get('date')).toISOString()
            })
        })
        await prisma.attendances.createMany({
            data: create_employees
        })
    } catch (err) {
        console.log(err);
    }
}

export async function updateEmployees(id, name) {
    try {
        const employee = await prisma.employees.update({
            where: {
                id: parseInt(id)
            },
            data: {
                name: name,
            }
        });
        return employee;
    } catch (err) {
        console.log(err);
    }
}

export async function deleteEmployees(id) {
    try {
        const employee = await prisma.employees.delete({
            where: {
                id: parseInt(id)
            }
        });
        return employee;
    } catch (err) {
        console.log(err);
    }
}