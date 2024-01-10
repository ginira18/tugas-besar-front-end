'use server'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// export async function getCategoryEmployees() {
//     const category_employees = await prisma.category_employees.findMany()
//     return category_employees
// }

export async function registration(name, username, password) {
    try {
        return await prisma.users.create({
            data: {
                name: name,
                username: username,
                password: password,
            }
        });
    } catch (err) {
        console.log(err);
    }
}

export async function login(username, password) {
    try {
        return await prisma.users.findFirst({
            where: {
                username: username,
                password: password,
            }
        });
    } catch (err) {
        console.log(err);
    }
}





// export async function updateCategoryEmployees(id, name) {
//     try {
//         const category_employee = await prisma.category_employees.update({
//             where: {
//                 id: parseInt(id)
//             },
//             data: {
//                 name: name,
//             }
//         });
//         return category_employee;
//     } catch (err) {
//         console.log(err);
//     }
// }

// export async function deleteCategoryEmployees(id) {
//     try {
//         const category_employee = await prisma.category_employees.delete({
//             where: {
//                 id: parseInt(id)
//             }
//         });
//         return category_employee;
//     } catch (err) {
//         console.log(err);
//     }
// }