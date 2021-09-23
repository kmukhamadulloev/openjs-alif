import mysqlx from '@mysql/xdevapi';

const url = 'mysqlx://app:pass@localhost:33060/social';

const close = async resource => {
    try {
        await resource?.close();
    } catch (e) {
        console.error(e);
    }
}
const mapRows = result => { 
    const rows = result.fetchAll();
    const columns = result.getColumns();

    return rows.map(row => Object.fromEntries(
        row.map((o, idx) => [columns[idx].getColumnLabel(), o])
    ));
}
    const client = mysqlx.getClient(url);
    let session = null;
    try {
        const session = await client.getSession();
        console.log(session);

        // const result = await session.sql('SELECT id, connect FROM posts WHERE id = ?')
        // .bind(1, 'first')
        // .execute();
        const id = 1;
        const content = 'First';
        const result = await session.sql(`
        SELECT id, content 
        FROM posts 
        WHERE id = ${id} 
            AND content = '${content}'
            `)
        .execute();
        console.log(result);
        const posts = mapRows(result);
        console.log(posts);
        // const posts = result.fetchAll();
        // console.log(posts);
    } catch (e) {
        console.error(e);
    } finally {
        await close(session);
        await close(client);
    }