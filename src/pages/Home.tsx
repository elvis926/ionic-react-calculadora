import {
    IonButton,
    IonContent, IonGrid,
    IonHeader,
    IonPage, IonRow,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './Home.css';

import {useState} from "react";

const Home: React.FC = () => {

    const [data, setData] = useState<string>("");

    const calculate = () => {
        try {
            const result = eval(data);
            setData(result);
        } catch (e) {
            setData("Error");
        }
    }

    const handleClick = (value: string) => {
        switch (value) {
            case "C":
                setData(data.slice(0, -1));
                break;
            case 'Clear':
                setData("");
                break;
            case '=':
                calculate();
                break;
            default:
                if (data === "Error") {
                    setData(value);
                } else {
                    setData(prevState => prevState + value);
                }
        }
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Calculadora</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>

                <div className={"data-buttons"}>
                    <IonGrid className="data">
                        {data}
                    </IonGrid>
                <IonGrid className={"ion-padding "}>
                    <IonRow>
                        <IonButton className="button2" onClick={() => handleClick("Clear")}>Clear</IonButton>
                        <IonButton className="button1" onClick={() => handleClick("C")}>C</IonButton>
                        <IonButton className="button1" onClick={() => handleClick("/")}>/</IonButton>
                    </IonRow>
                    <IonRow>
                        <IonButton color="medium" className="button1" onClick={() => handleClick("7")}>7</IonButton>
                        <IonButton color="medium" className="button1" onClick={() => handleClick("8")}>8</IonButton>
                        <IonButton color="medium" className="button1" onClick={() => handleClick("9")}>9</IonButton>
                        <IonButton className="button1" onClick={() => handleClick("*")}>*</IonButton>
                    </IonRow>
                    <IonRow>
                        <IonButton color="medium" className="button1" onClick={() => handleClick("4")}>4</IonButton>
                        <IonButton color="medium" className="button1" onClick={() => handleClick("5")}>5</IonButton>
                        <IonButton color="medium" className="button1" onClick={() => handleClick("6")}>6</IonButton>
                        <IonButton className="button1" onClick={() => handleClick("-")}>-</IonButton>
                    </IonRow>
                    <IonRow>
                        <IonButton color="medium" className="button1" onClick={() => handleClick("1")}>1</IonButton>
                        <IonButton color="medium" className="button1" onClick={() => handleClick("2")}>2</IonButton>
                        <IonButton color="medium" className="button1" onClick={() => handleClick("3")}>3</IonButton>
                        <IonButton className="button1" onClick={() => handleClick("+")}>+</IonButton>
                    </IonRow>
                    <IonRow>
                        <IonButton color="medium" className="button1" onClick={() => handleClick("0")}>0</IonButton>
                        <IonButton color="success" className="button3" onClick={() => handleClick("=")}>=</IonButton>
                    </IonRow>
                </IonGrid>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Home;
