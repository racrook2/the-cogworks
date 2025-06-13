'use client';

import sets from "@/json/sets.json";
import data from "@/json/results.json";
import dataSansWailord from "@/json/resultsSansWailord.json";
import dataAverage from "@/json/resultsAverage.json";
import {
    Chart,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup, Switch } from "@mui/material";

Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function TCG() {
    const [sansWailord, setSansWailord] = useState(false);
    const [sansWailordDisabled, setSansWailordDisabled] = useState(false);
    const [averages, setAverages] = useState(false);

    function hpData(stage) {
        let dataset;

        if (averages) {
            dataset = dataAverage;
        } else {
            dataset = sansWailord ? dataSansWailord : data;
        }

        return sets.map((set, i) => {
            if (dataset[set][stage]) {
                return dataset[set][stage].hp;
            } else {
                return null;
            }
        });
    }

    return (
        <>
            <
                Line
                data={{
                    labels: sets,
                    datasets: [
                        {
                            label: "Baby",
                            data: hpData("Baby"),
                            borderWidth: 1,
                            borderColor: "#82c2f2",
                            backgroundColor: "#a4d3f6"
                        },
                        {
                            label: "Basic",
                            data: hpData("Basic"),
                            borderWidth: 1,
                            borderColor: "#ffa5b7",
                            backgroundColor: "#ffb1bf"
                        },
                        {
                            label: "Stage 1",
                            data: hpData("Stage 1"),
                            borderWidth: 1,
                            borderColor: "#ffc692",
                            backgroundColor: "#fed2a7"
                        },
                        {
                            label: "Stage 2",
                            data: hpData("Stage 2"),
                            borderWidth: 1,
                            borderColor: "#ffe19f",
                            backgroundColor: "#ffe5ab"
                        },
                        {
                            label: "Stage 3",
                            data: hpData("Stage 3"),
                            borderWidth: 1,
                            borderColor: "#9bdada",
                            backgroundColor: "#abe0e0"
                        },
                        {
                            label: "Multi-Prize Basic",
                            data: hpData("Multi-Prize Basic"),
                            borderWidth: 1,
                            borderColor: "#c3a5ff",
                            backgroundColor: "#d0b7ff"
                        },
                        {
                            label: "Multi-Prize Stage 1",
                            data: hpData("Multi-Prize Stage 1"),
                            borderWidth: 1,
                            borderColor: "#dfe0e2",
                            backgroundColor: "#e4e5e7"
                        },
                        {
                            label: "Multi-Prize Stage 2",
                            data: hpData("Multi-Prize Stage 2"),
                            borderWidth: 1,
                            borderColor: "#8ec7f4",
                            backgroundColor: "#a0d0f6"
                        }
                    ]
                }}
                options={{
                    scales: {
                        y: {
                            min: 0,
                            max: 350
                        }
                    }
                }}
            />
            <FormGroup>
                <div>
                    Maximum
                    <Switch
                        value={averages}
                        onClick={() => {
                            setSansWailord(false);
                            setSansWailordDisabled(!averages);
                            setAverages(!averages);
                        }}
                    />
                    Average
                </div>
                <FormControlLabel
                    label="Remove Wailord"
                    control={
                        <Checkbox
                            checked={sansWailord}
                            disabled={sansWailordDisabled}
                            onClick={() => setSansWailord(!sansWailord)}
                        />
                    }
                />
            </FormGroup>
        </>
    );
}
