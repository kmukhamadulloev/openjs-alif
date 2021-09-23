import { getSession } from '@mysql/xdevapi';

const mapRows = result => {
    const rows = result.fetchAll();
    const columns = result.getColumns();

    return rows.map(row => Object.fromEntries(
        row.map((o, id) => [columns[id].getColumnLabel(), o])  
    ));
};

async function execute() {
    let session = null;

    try {
        session = await getSession({
            user: 'app',
            password: 'pass',
            host: 'localhost',
            port: 33060
        });

        const db = session.getSchema('social');
        const table = db.getTable('posts');
        const res = await table.update()
        .set('removed', true)
        .where('removed = False AND id = 5')
        .execute();
        
        const posts = mapRows(res);
        console.log(posts);

    } catch (e) {
        console.error(e);
    }

    if (session !== null) {
        await session.close();
    }
}

execute();