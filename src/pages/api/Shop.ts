import { NextApiRequest, NextApiResponse } from "next";
import { Collection } from "mongodb";

import dealWithDB from "utility/dealWithDB";
import type { Section } from "utility/SectionModel";

const reqHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await dealWithDB<Section[]>({ DB: "Shop", collection: "sections", action: getAllData });

    res.status(200).json(data);
}

export default reqHandler;

const getAllData = async (collecion: Collection) => {
    const sections = (await collecion.find().toArray()).map((data) => ({ name: data.name, image: data.image, items: data.items }));

    return sections;
}