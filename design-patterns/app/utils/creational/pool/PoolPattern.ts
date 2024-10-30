import PaymentConnectionPool from './PaymentConnectionPool';

export default function PoolPattern() {
    const pool = new PaymentConnectionPool(2);
    try {
        const connection1 = pool.getConnection();
        const connection2 = pool.getConnection();

        pool.releaseConnection(connection1);
        const connection3 = pool.getConnection();

        pool.releaseConnection(connection2);
        pool.releaseConnection(connection3);
    } catch (error) {
        console.error(error);
    }
}