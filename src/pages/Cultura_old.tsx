import React, { useState, useEffect } from "react";
import {
    Box,
    Grid,
    Container,
    Card,
    CardContent,
    Typography,
    Modal,
    Button,
    IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";


import './cultura.scss';

interface Value {
    title: string;
    description: string;
}

const values: Record<string, Value> = {
    sustentabilidade: {
        title: "Sustentabilidade",
        description:
            "Reduzir emissões de carbono e promover o uso consciente de recursos naturais. Em 2023, a empresa alcançou 80% de matérias-primas recicláveis, contribuindo significativamente para a preservação do meio ambiente.",
    },
    inovacao: {
        title: "Inovação",
        description:
            "Desenvolver soluções eficientes e ecológicas. Em 2022, foi lançado um papel biodegradável com impacto ambiental reduzido em 50%, sendo uma referência no mercado.",
    },
    etica: {
        title: "Ética",
        description:
            "Promover transparência e práticas responsáveis. A implementação de um canal de denúncias anônimo permitiu investigar 80% dos casos reportados, reforçando a integridade organizacional.",
    },
    seguranca: {
        title: "Segurança",
        description:
            "Garantir um ambiente de trabalho seguro. Treinamentos de EPIs realizados em 2023 capacitaram 90% dos colaboradores, reduzindo acidentes de trabalho em 30%.",
    },
};


const Cultura = () => {
    const [modalContent, setModalContent] = useState<Value | null>(null);

    const openModal = (valueKey: string) => {
        setModalContent(values[valueKey]);
    };

    const closeModal = () => {
        setModalContent(null);
    };

    const toggleDescription = () => {
        const container = document.querySelector('.icon-container') as HTMLElement;
        container.classList.toggle('active');

    }

    useEffect(() => {
        document.title = "Cultura - Boas Vindas Suzano";
    }, []);


    return (<>

        <Box
            sx={{
                fontFamily: "Arial, sans-serif",
                backgroundColor: "#f4f4f9",
                minHeight: "100vh",
                padding: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Typography variant="h4" gutterBottom>
                Valores da Empresa
            </Typography>
            <Grid container spacing={3} sx={{ maxWidth: 1000 }}>
                {Object.keys(values).map((key) => (
                    <Grid item xs={12} sm={6} md={4} key={key}>
                        <Card
                            sx={{
                                cursor: "pointer",
                                transition: "transform 0.3s, box-shadow 0.3s",
                                '&:hover': {
                                    transform: "scale(1.05)",
                                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                },
                            }}
                            onClick={() => openModal(key)}
                        >
                            <CardContent sx={{ textAlign: "center" }}>
                                <img
                                    src={`https://via.placeholder.com/50?text=${encodeURIComponent(
                                        key === "sustentabilidade"
                                            ? "🌿"
                                            : key === "inovacao"
                                                ? "💡"
                                                : key === "etica"
                                                    ? "👕"
                                                    : "🛡"
                                    )}`}
                                    alt={values[key].title}
                                    style={{ width: 50, marginBottom: 15 }}
                                />
                                <Typography variant="h6">{values[key].title}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Modal open={!!modalContent} onClose={closeModal}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "white",
                        borderRadius: 2,
                        boxShadow: 24,
                        padding: 4,
                        width: "90%",
                        maxWidth: 600,
                    }}
                >
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography variant="h6">{modalContent?.title}</Typography>
                        <IconButton onClick={closeModal}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Typography sx={{ marginTop: 2 }}>{modalContent?.description}</Typography>
                    <Button
                        variant="contained"
                        sx={{ marginTop: 2 }}
                        onClick={closeModal}
                    >
                        Fechar
                    </Button>
                </Box>
            </Modal>

            <div className="icon-container">
                <div className="icon" onClick={toggleDescription}>
                    <span className="leaf-icon">🌿</span>
                </div>
                <div className="description">
                    Este é o ícone de folha verde, representando sustentabilidade.
                </div>
            </div>

        </Box>

    </>);
}

export default Cultura;