
const { PrismaClient } = require("@prisma/client")

const db = new PrismaClient()


async function main() {
    try {
        await db.category.createMany({
            data: [
                { name: "General Medicine" },
                { name: "Surgery" },
                { name: "Urology" },
                { name: "Pediatrics" },
                { name: "Orthopedics" },
                { name: "Dermatology" },
                { name: "Neurosurgery" },
                { name: "General Surgery" },
            ]
        })
    } catch (error) {
        console.error("Error Seeding default Category", error)
    } finally {
        await db.$disconnect()
    }
}

main()