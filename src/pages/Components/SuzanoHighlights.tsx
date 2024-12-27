import React from "react";
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardHeader,
    Grid,
} from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)(() => ({
    position: "relative",
    overflow: "hidden",
    borderRadius: "16px",
    background: "linear-gradient(135deg, #ffffff, #f0f4c3)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    transition: "transform 0.4s, box-shadow 0.4s",
    "&:hover": {
        transform: "translateY(-10px) rotateX(8deg)",
        boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    },
    "&::before": {
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "radial-gradient(circle, rgba(255,255,255,0.4), transparent)",
        opacity: 0,
        transition: "opacity 0.4s",
    },
    "&:hover::before": {
        opacity: 1,
    },
}));

const StyledHeader = styled(CardHeader)(() => ({
    textAlign: "center",
    background: "linear-gradient(90deg, #4caf50, #2196f3)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "1.5rem",
    fontWeight: "bold",
}));

const SuzanoHighlights: React.FC = () => {
    const sections = [
        {
            title: "Sustentabilidade",
            content:
                "A Suzano integra a sustentabilidade em todas as áreas de atuação, promovendo o uso de recursos renováveis e práticas que minimizem os impactos ambientais. A empresa investe em reflorestamento, economia circular e soluções que substituem materiais não renováveis, como plásticos, por alternativas biodegradáveis. Esse compromisso também se reflete em metas ousadas, como alcançar a neutralidade de carbono até 2030.",
        },
        {
            title: "Inovação",
            content:
                "A inovação é um valor central, presente no desenvolvimento de novos produtos, como bioplásticos e celulose de alta tecnologia, e na adoção de tecnologias que aumentem a eficiência operacional. A Suzano incentiva a criatividade e o pensamento disruptivo, buscando antecipar tendências de mercado e oferecer soluções que atendam às demandas da sociedade.",
        },
        {
            title: "Ética e Transparência",
            content:
                "A Suzano promove relações baseadas na integridade e na responsabilidade, tanto internamente quanto com seus parceiros, clientes e comunidades. A ética é um princípio fundamental, com práticas transparentes que asseguram a confiança e a credibilidade da empresa no mercado.",
        },
        {
            title: "Colaboração",
            content:
                "A Suzano valoriza a força do trabalho em equipe e acredita que a diversidade de ideias, experiências e perspectivas é essencial para o crescimento sustentável. A empresa promove um ambiente inclusivo, onde todos têm voz, e fomenta parcerias com comunidades locais, fornecedores e organizações para gerar valor compartilhado.",
        },
    ];

    return (
        <Box
            sx={{
                p: 6,
                background: "linear-gradient(120deg, #e3f2fd, #e8f5e9)",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    pb: 6,
                    background: "linear-gradient(90deg, #ff9800, #f44336)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "0 2px 4px rgba(0,0,0,0.2)",
                }}
            >
                Valores e Compromissos da Suzano 🌿✨
            </Typography>
            <Grid container spacing={6} justifyContent="center">
                {sections.map((section, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <StyledCard>
                            <StyledHeader
                                title={section.title}
                                titleTypographyProps={{ align: "center" }}
                            />
                            <CardContent>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                    sx={{
                                        lineHeight: 1.6,
                                        textAlign: "justify",
                                        color: "rgba(0,0,0,0.8)",
                                    }}
                                >
                                    {section.content}
                                </Typography>
                            </CardContent>
                        </StyledCard>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default SuzanoHighlights;
