class Encriptador {
  constructor() {}
  static encriptar(texto) {
    var resultado = "";
    for (let i = 0; i < texto.length; i++) {
      switch (texto[i]) {
        case "a":
          resultado = resultado + "ai";
          break;
        case "e":
          resultado = resultado + "enter";
          break;
        case "i":
          resultado = resultado + "imes";
          break;
        case "o":
          resultado = resultado + "ober";
          break;
        case "u":
          resultado = resultado + "ufat";
          break;
        default:
          resultado = resultado + texto[i];
          break;
      }
    }
    return resultado;
  }
  static desencriptar(texto) {
    var resultado = "";
    var longitud = texto.length;
    for (let i = 0; i < longitud; i++) {
      debugger;
      switch (texto[i]) {
        case "a":
          if (texto[i] == "a" && texto[i + 1] == "i") {
            resultado = resultado + "a";
            i += 1;
          } else {
            resultado = resultado + "a";
          }
          break;
        case "e":
          if (
            texto[i] == "e" &&
            texto[i + 1] == "n" &&
            texto[i + 2] == "t" &&
            texto[i + 3] == "e" &&
            texto[i + 4] == "r"
          ) {
            resultado = resultado + "e";
            i += 4;
          } else {
            resultado = resultado + "e";
          }
          break;
        case "i":
          if (
            texto[i] == "i" &&
            texto[i + 1] == "m" &&
            texto[i + 2] == "e" &&
            texto[i + 3] == "s"
          ) {
            resultado = resultado + "i";
            i += 3;
          } else {
            resultado = resultado + "i";
          }
          break;
        case "o":
          if (
            texto[i] == "o" &&
            texto[i + 1] == "b" &&
            texto[i + 2] == "e" &&
            texto[i + 3] == "r"
          ) {
            resultado = resultado + "o";
            i += 3;
          } else {
            resultado = resultado + "o";
          }
          break;
        case "u":
          if (
            texto[i] == "u" &&
            texto[i + 1] == "f" &&
            texto[i + 2] == "a" &&
            texto[i + 3] == "t"
          ) {
            resultado = resultado + "u";
            i += 3;
          } else {
            resultado = resultado + "u";
          }
          break;
        default:
          resultado = resultado + texto[i];
      }
    }

    return resultado;
  }
}
