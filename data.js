const items = [
    {
        "scientific_name": "Saintpaulia ionantha",
        "common_name": "African Violet",
        "genus": "Saintpaulia",
        "image_url": "https://www.recordnet.com/gcdn/presto/2019/11/11/PSAL/cd54a658-7398-4509-8281-efb7feb6d143-SAL1Brd_12-15-2017_Statesman_1_D004__2017_12_13_IMG_636486351410331226_b_1_1_G8KIPN7B_L1149165959_IMG_636486351410331226_b_1_1_G8KIPN7B.jpg?width=660&height=557&fit=crop&format=pjpg&auto=webp",
        "available": "2"
    },
    {
        "scientific_name": "Begonia coccinea",
        "common_name": "Angel Wing Begonia",
        "genus": "Begonia",
        "image_url": "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1713479758-81Y4e7YGSBL.jpg?crop=0.873xw:0.873xh;0.0869xw,0.00427xh&resize=980:*",
        "available": "1"
    },
    {
        "scientific_name": "Asparagus setaceus",
        "common_name": "Asparagus Fern",
        "genus": "Asparagus",
        "image_url": "https://images.squarespace-cdn.com/content/v1/5e1a9e93d343ec0c523f4074/8d25be27-fa89-43da-909b-bc2cb3d4e752/Asparagus_Fern_Orange.jpg",
        "available": "0"
    },
    {
        "scientific_name": "Peperomia obtusifolia",
        "common_name": "Baby Rubber Plant",
        "genus": "Peperomia",
        "image_url": "https://edsplantshop.com/cdn/shop/files/peperomia-obtusifolia-variegata-baby-rubber-plant-925115.jpg?v=1732259518",
        "available": "1"
    },
    {
        "scientific_name": "Dracaena trifasciata",
        "common_name": "Snake Plant",
        "genus": "Dracaena",
        "image_url": "https://planetdesert.com/cdn/shop/files/Variegated-Snake-Plant-Sansevieria-laurentii-6-inch_9_1400x.jpg?v=1739474752",
        "available": "1"
    },
    {
        "scientific_name": "Philodendron hederaceum 'Brasil'",
        "common_name": "Brasil Philodendron",
        "genus": "Philodendron",
        "image_url": "https://plantstogo.com/wp-content/uploads/2024/08/4PHIBR-5440__48860.jpg",
        "available": "1"
    },
    {
        "scientific_name": "Ficus elastica 'Burgundy'",
        "common_name": "Burgundy Rubber Plant",
        "genus": "Ficus",
        "image_url": "https://www.plantshopgr.com/cdn/shop/products/image_6f15da82-a1b3-48a2-b780-e26820ae2efa.jpg?v=1680901787",
        "available": "1"
    },
    {
        "scientific_name": "Hoya carnosa 'Rubra",
        "common_name": "Krimson Princess",
        "genus": "Hoya",
        "image_url": "https://serreslavoie.com/cdn/shop/files/978A526B-3A02-40C1-9DF1-7E7F346D7CFE.jpg?v=1729693415&width=480",
        "available": "0"
    },
    {
        "scientific_name": "Epipremnum aureum 'Manjula'",
        "common_name": "Manjula Pothos",
        "genus": "Epipremnum",
        "image_url": "https://thegardening.org/wp-content/uploads/2022/08/Manjula-Pothos.webp",
        "available": "1"
    },
    {
        "scientific_name": "Epipremnum aureum 'Neon'",
        "common_name": "Neon Pothos",
        "genus": "Epipremnum",
        "image_url": "https://www.gabriellaplants.com/cdn/shop/files/gabriella-plants-pothos-epipremnum-aureum-neon-4-40230648709365.jpg?v=1710959302",
        "available": "1"
    },
    {
        "scientific_name": "Araucaria heterophylla",
        "common_name": "Norfolk Island Pine",
        "genus": "Araucaria",
        "image_url": "https://heyrooted.com/cdn/shop/files/NORFOLK_PINE_4-2.jpg?v=1698693481&width=1946",
        "available": "1"
    },
    {
        "scientific_name": "Chamaedorea elegans",
        "common_name": "Parlor Palm",
        "genus": "Chamaedorea",
        "image_url": "https://cdn.mos.cms.futurecdn.net/qcdYRNJMNAvPyqCpn8P6hS.jpg",
        "available": "0"
    },
    {
        "scientific_name": "Philodendron erubescens 'Pink Princess'",
        "common_name": "Pink Princess Philodendron",
        "genus": "Philodendron",
        "image_url": "https://www.gabriellaplants.com/cdn/shop/files/gabriella-plants-philodendron-pink-princess-4-40493221675253_1800x1800.jpg?v=1713379415",
        "available": "2"
    },
    {
        "scientific_name": "Ficus pumila ‘Quercifolia’",
        "common_name": "Oak Leaf Creeping Fig",
        "genus": "Ficus",
        "image_url": "https://i.etsystatic.com/21398824/r/il/0374dc/4761212583/il_fullxfull.4761212583_25pl.jpg",
        "available": "1"
    },
    {
        "scientific_name": "Zamioculcas zamiifolia 'Raven'",
        "common_name": "Raven ZZ Plant",
        "genus": "Zamioculcas",
        "image_url": "https://www.fortheloveofnature.in/cdn/shop/products/zamioculcaszamiifoliablack_ZZplant_3_1445x.jpg?v=1640255324",
        "available": "0"
    },
    {
        "scientific_name": "Ficus elastica 'Ruby'",
        "common_name": "Ruby Rubber Plant",
        "genus": "Ficus",
        "image_url": "https://www.succulentsdepot.com/cdn/shop/products/PhotoRoom-20210725_164426.png?v=1627258885",
        "available": "0"
    },
    {
        "scientific_name": "Scindapsus pictus",
        "common_name": "Satin Pothos",
        "genus": "Scindapsus",
        "image_url": "https://www.thespruce.com/thmb/d_K0HrpEfkWiGGGjPaVIzsVlarw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/growing-satin-pothos-5114102-hero-9415effa5b9b44d6918731503ec76b6f.jpg",
        "available": "1"
    },
    {
        "scientific_name": "Ledebouria socialis",
        "common_name": "Silver Squill",
        "genus": "Ledebouria",
        "image_url": "https://i.etsystatic.com/18043111/r/il/cde315/4217573219/il_570xN.4217573219_9gge.jpg",
        "available": "1"
    },
    {
        "scientific_name": "Chlorophytum comosum",
        "common_name": "Spider Plant",
        "genus": "Chlorophytum",
        "image_url": "https://succulentsbox.com/cdn/shop/files/Spider-Plant-4_2048x_9db66466-44cb-4db2-ac78-00b34a7699b5_600x.jpg?v=1742271732",
        "available": "2"
    },
    {
        "scientific_name": "Monstera deliciosa 'Thai Constellation'",
        "common_name": "Thai Constellation Monstera",
        "genus": "Monstera",
        "image_url": "https://greenboog.com/wp-content/uploads/2023/02/Monstera-Thai-Constellation-Variegated.webp",
        "available": "0"
    },
    {
        "scientific_name": "Monstera deliciosa",
        "common_name": "Monstera",
        "genus": "Monstera",
        "image_url": "https://www.provenwinners.com/sites/provenwinners.com/files/ifa_upload/monstera_delicisoa_monster_mash_swiss_cheese_vine_tag.jpg",
        "available": "0"
    },
    {
        "scientific_name": "Pilea peperomioides",
        "common_name": "Chinese Money Plant",
        "genus": "Pilea",
        "image_url": "https://images.immediate.co.uk/production/volatile/sites/10/2021/03/2048x1365-Pilea-Peperomioides-SEO-GettyImages-1225860485-79b134d.jpg",
        "available": "1"
    },
    {
        "scientific_name": "Aeschynanthus radicans",
        "common_name": "Lipstick Plant",
        "genus": "Aeschynanthus",
        "image_url": "https://nouveauraw.com/wp-content/uploads/2020/07/lipstick-plant-800.png",
        "available": "1"
    },
    {
        "scientific_name": "Epipremnum aureum",
        "common_name": "Golden Pothos",
        "genus": "Epipremnum",
        "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjMlKpH1h4F6LZpUEFP5W3U6kfOK_76W76t8y3mpnkvhM2Xvt1qdlyDoD1Os9kZHtEvyn-5viMBwGSPczD1JNjLw",
        "available": "1"
    },
    {
        "scientific_name": "Dieffenbachia amoena",
        "common_name": "Dumb Cane",
        "genus": "Dieffenbachia",
        "image_url": "https://www.healthyhouseplants.com/wp-content/uploads/2024/08/Dumbcane-Dieffenbachia-1200x1200.jpg",
        "available": "0"
    },
    {
        "scientific_name": "Peperomia argyreia",
        "common_name": "Watermelon Peperomia",
        "genus": "Peperomia",
        "image_url": "https://i.etsystatic.com/35559671/r/il/f64496/5499588394/il_794xN.5499588394_gj7c.jpg",
        "available": "2"
    },
    {
        "scientific_name": "Hedera helix",
        "common_name": "English Ivy",
        "genus": "Hedera",
        "image_url": "https://images.immediate.co.uk/production/volatile/sites/10/2021/09/hedera.helix_-02ba5c9.jpg?quality=90&resize=940,627",
        "available": "1"
    },
    {
        "scientific_name": "Begonia bowerae",
        "common_name": "Eyelash Begonia",
        "genus": "Begonia",
        "image_url": "https://i.etsystatic.com/24919299/r/il/d43220/3343860649/il_fullxfull.3343860649_emm3.jpg",
        "available": "1"
    },
    {
        "scientific_name": "Oxalis triangularis",
        "common_name": "False Shamrock",
        "genus": "Oxalis",
        "image_url": "https://images.cdn-files-a.com/uploads/1826974/2000_5d9259f93f8e3.jpg",
        "available": "1"
    },
    {
        "scientific_name": "Ficus elastica 'Tineke'",
        "common_name": "Tineke Rubber Tree",
        "genus": "Ficus",
        "image_url": "https://plant-material.com/cdn/shop/products/image_d5862937-d34d-4e3b-afdc-d5ad463f87aa.jpg?v=1601584510",
        "available": "0"
    },
    {
        "scientific_name": "Schefflera arboricola",
        "common_name": "Umbrella Tree",
        "genus": "Schefflera",
        "image_url": "https://www.livelyroot.com/cdn/shop/products/pl_ScheffleraGoldCapella_4IN_po_grower_detail-3.jpg?v=1656480930&width=960",
        "available": "1"
    },
    {
        "scientific_name": "Dionaea muscipula",
        "common_name": "Venus Flytrap",
        "genus": "Dionaea",
        "image_url": "https://www.groundsguys.ca/ca/en-ca/grounds-guys/_assets/VenusFlytrap.webp",
        "available": "0"
    }
]
