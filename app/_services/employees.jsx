import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function getCategoryEmployees() {
    const category_employees = await prisma.category_employees.findMany()
    return category_employees
}

export async function insertCategoryEmployees(name) {
    try {
        const category_employee = await prisma.category_employees.create({
            data: {
                name: name,
            }
        });
        return category_employee;
    } catch (err) {
        console.log(err);
    }
}

export async function updateCategoryEmployees(id, name) {
    try {
        const category_employee = await prisma.category_employees.update({
            where: {
                id: parseInt(id)
            },
            data: {
                name: name,
            }
        });
        return category_employee;
    } catch (err) {
        console.log(err);
    }
}