import { useState } from "react";
import { Text, View, Button } from "react-native";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f1aaaaff", 
  },
  title: {
    fontSize: 26,
    color: "#000000ff", 
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    color: "#ffffffff",
  },
  input: {
    width: "80%",
    borderColor: "#ffffffff",
    borderWidth: 2,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#ffffff"
  },
  button: {
    marginVertical: 10,
    backgroundColor: "#00838f"
  },
  imcResult: {
    fontSize: 18,
    color: "#d84315", // laranja
    marginTop: 10,
    fontWeight: "bold"
  }
});

export default function Index() {
  // Montante e Parcela
  const [capital, setCapital] = useState("");
  const [taxa, setTaxa] = useState("");
  const [tempo, setTempo] = useState("");
  const [resultado, setResultado] = useState("");

  const calcularMontante = () => {
    const c = parseFloat(capital.replace(",", "."));
    const i = parseFloat(taxa.replace(",", "."));
    const t = parseFloat(tempo.replace(",", "."));
    if (!c || !i || !t) {
      setResultado("Preencha todos os campos corretamente.");
      return;
    }
    const m = c * Math.pow((1 + i), t);
    const p = m / t;
    setResultado(`Montante: R$ ${m.toFixed(2)} | Parcela: R$ ${p.toFixed(2)}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Montante</Text>
      <TextInput
        placeholder="Capital Inicial (C)"
        style={styles.input}
        value={capital}
        onChangeText={setCapital}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Taxa (i) - Ex: 0.05 para 5%"
        style={styles.input}
        value={taxa}
        onChangeText={setTaxa}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Tempo (t) em períodos"
        style={styles.input}
        value={tempo}
        onChangeText={setTempo}
        keyboardType="numeric"
      />
      <Button
        title="Calcular Montante e Parcela"
        color="#d84315"
        onPress={calcularMontante}
      />
      {resultado !== "" && (
        <Text style={styles.imcResult}>{resultado}</Text>
      )}
    </View>
  );
}