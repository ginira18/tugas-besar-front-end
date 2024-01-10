'use server'

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'
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

export async function getChartAttendanceByMonth(month) {
    const hadir = await prisma.attendances.count({
        where: {
            date: {
                gte: month.toISOString(),
                lte: month.add(1, 'month').toISOString(),
            },
            kehadiran: 'hadir'
        }
    })
    const izin = await prisma.attendances.count({
        where: {
            date: {
                gte: month.toISOString(),
                lte: month.add(1, 'month').toISOString(),
            },
            kehadiran: 'izin'
        }
    })
    const tidak_hadir = await prisma.attendances.count({
        where: {
            date: {
                gte: month.toISOString(),
                lte: month.add(1, 'month').toISOString(),
            },
            kehadiran: 'tidak_hadir'
        }
    })

    return [
        hadir,
        izin,
        tidak_hadir,
    ]
}

export async function insertOrUpdate(formData) {
    try {
        const formDataEntries = formData.entries();

        const formDataArray = Array.from(formDataEntries);

        const employees = formData.getAll('employees[][employee_id]')
        const kehadiran = formDataArray
            .filter(([name]) => name.startsWith('kehadiran'))
            .map(([, value]) => value);

        await prisma.$transaction(
            employees.map((employee, index) => {
                return prisma.attendances.upsert({
                    where: {
                        date_employee_id: {
                            employee_id: parseInt(employee),
                            date: (new Date(formData.get('date'))).toISOString()
                        },
                    },
                    update: { kehadiran: kehadiran[index] },
                    create: {
                        employee_id: parseInt(employee),
                        date: (new Date(formData.get('date'))).toISOString(),
                        kehadiran: kehadiran[index]
                    }
                })
            })
        )
        revalidatePath(`/attendance/${formData.get('category_employee_id')}?date=${formData.get('date')}`)

        // await prisma.$transaction.commit(transaction);

    } catch (err) {
        console.error('Error during batch create or update:', err);
        // if (transaction) await prisma.$transaction.rollback(transaction);
    } finally {
        // Close the Prisma client connection
        await prisma.$disconnect();
    }
}

// export async function updateEmployees(id, employee_args) {
//     try {
//         console.log(employee_args)
//         const employee = await prisma.employees.update({
//             where: {
//                 id: parseInt(id)
//             },
//             data: employee_args
//         });
//         return employee;
//     } catch (err) {
//         console.log(err);
//     }
// }

// export async function deleteEmployees(id) {
//     try {
//         const employee = await prisma.employees.delete({
//             where: {
//                 id: parseInt(id)
//             }
//         });
//         return employee;
//     } catch (err) {
//         console.log(err);
//     }
// }