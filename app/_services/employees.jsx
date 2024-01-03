import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function getEmployees() {
    const employees = await prisma.employees.findMany()
    return employees
}

export async function insertEmployees(name, alamat, category_employee_id) {
    try {
        const employee = await prisma.employees.create({
            data: {
                name: name,
                alamat: alamat,
                category_employee_id: parseInt(category_employee_id),
            }
        });
        return employee;
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