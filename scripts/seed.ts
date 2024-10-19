const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
    try {
        await db.category.createMany({
            data: [
                // General Medical Fields
                { name: "General Medicine" },
                { name: "Dentistry" },
                { name: "Pharmacy" },

                // Clinical Specialties
                { name: "Internal Medicine" },
                { name: "Cardiology" },
                { name: "Endocrinology" },
                { name: "Gastroenterology" },
                { name: "Surgery" },
                { name: "General Surgery" },
                { name: "Neurosurgery" },
                { name: "Cardiovascular Surgery" },
                { name: "Pediatrics" },
                { name: "Obstetrics and Gynecology" },
                { name: "Dermatology" },
                { name: "Ophthalmology" },
                { name: "Orthopedics" },
                { name: "Urology" },
                { name: "Otolaryngology (ENT)" },

                // Laboratory and Diagnostic Specialties
                { name: "Pathology" },
                { name: "Radiology" },
                { name: "Clinical Biochemistry" },
                { name: "Immunology" },

                // Psychiatry and Mental Health Specialties
                { name: "Psychiatry" },
                { name: "Neurology" },

                // Other Specialties
                { name: "Emergency Medicine" },
                { name: "Rehabilitation and Physiotherapy" },
                { name: "Sports Medicine" },
                { name: "Forensic Medicine" },
                { name: "Occupational Medicine" },

                // Research and Education-Related Fields
                { name: "Medical Genetics" },
                { name: "Epidemiology" },
                { name: "Public Health" },
            ]
        });
    } catch (error) {
        console.error("Error Seeding default Category", error);
    } finally {
        await db.$disconnect();
    }
}

main();
