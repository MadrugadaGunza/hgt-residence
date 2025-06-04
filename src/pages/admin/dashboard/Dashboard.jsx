import styles from './Dashboard.module.css'
import React from 'react';
import { Home, HousePlus, Users } from 'lucide-react';
import { VictoryBar, VictoryPie } from "victory";
import { VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

const Dashboard = () => {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/apartment');
                if (!response.ok) throw new Error('Erro na resposta da rede');
                const { data } = await response.json();
                setData(data);
            } catch (error) {
                console.error('Erro na requisição: ', error);
            }
        };
        fetchData();
    }, []);

    return (
        <section className={styles.dashboard}>
            <div className={styles.blockCards}>
                <article className={styles.card}>
                    <span>
                        <Users className={styles.icon} />
                    </span>
                    <div>
                        <p>Clientes</p>
                        <h5>100</h5>
                    </div>
                </article>
                <article className={styles.card}>
                    <span>
                        <Home className={styles.icon} />
                    </span>
                    <div>
                        <p>Apartamentos</p>
                        <h5>{data.length}</h5>
                    </div>
                </article>
                <article className={styles.card}>
                    <span>
                        <HousePlus className={styles.icon} />
                    </span>
                    <div>
                        <p>Reservas</p>
                        <h5>350</h5>
                    </div>
                </article>
            </div>
            <div className={styles.content}>
                <article>
                    <VictoryPie
                        data={[
                            { x: 'Clientes', y: 1 },
                            { x: 'Apartamentos', y: data.length },
                            { x: 'Reservas', y: 1 }
                        ]}
                        colorScale={['#5295de', '#1B58A4', '#2b77cc']}
                        innerRadius={50}
                        labelRadius={80}
                        style={{
                            data: {
                                fillOpacity: 1,
                                stroke: "#fff",
                                strokeWidth: 2
                            },
                            labels: {
                                fill: "#333",
                                fontSize: 12,
                                fontWeight: 'bold'
                            }
                        }}
                    />
                </article>
                <article>
                    <VictoryChart
                        domainPadding={40}
                        theme={VictoryTheme.material}
                    >
                        <VictoryAxis
                            style={{
                                axis: { stroke: '#555' },
                                tickLabels: { fill: '#333', fontSize: 10 }
                            }}
                        />
                        <VictoryAxis
                            dependentAxis
                            style={{
                                axis: { stroke: '#ccc' },
                                tickLabels: { fill: '#555', fontSize: 10 }
                            }}
                        />

                        <VictoryBar
                            data={[
                                { x: 'Clientes', y: 1 },
                                { x: 'Apartamentos', y: data.length },
                                { x: 'Reservas', y: 1 }
                            ]}
                            style={{
                                data: {
                                    fill: '#1B58A4',
                                    width: 35,
                                    stroke: '#1B58A4',
                                    strokeWidth: 2,
                                    borderRadius: 50
                                },
                                labels: {
                                    fill: '#000',
                                    fontSize: 14,
                                    fontWeight: 'bold'
                                }
                            }}
                            labels={({ datum }) => `${datum.y}`}
                            animate={{
                                duration: 800,
                                onLoad: { duration: 500 }
                            }}
                        />
                    </VictoryChart>
                </article>
            </div>
        </section>
    )
}

export default Dashboard
