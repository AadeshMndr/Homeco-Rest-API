import { MongoClient, Collection } from "mongodb";

const dealWithDB = async <DataType>({
  DB,
  collection,
  action,
}: {
  DB: "Shop";
  collection: "sections";
  action: (collection: Collection) => Promise<DataType>;
}) => {
  const cluster = await MongoClient.connect(
    `mongodb+srv://admin:admin@cluster0.yehti2l.mongodb.net/?retryWrites=true&w=majority`
  );

  const db = cluster.db(DB);

  const collecion = db.collection(collection);

  const result = await action(collecion);

  await cluster.close();

  return result;
};

export default dealWithDB;
