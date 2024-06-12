public class CifraDeCesar {

  // Atributo para armazenar o deslocamento da cifra
  private int deslocamento;

  // Construtor para inicializar o atributo
  public CifraDeCesar(int deslocamento) {
    this.deslocamento = deslocamento;
  }

  // Método para criptografar uma palavra com um deslocamento dado
  public static String criptografar(String palavra, int deslocamento) {
    // Converte a palavra para maiúscula
    palavra = palavra.toUpperCase();
    // Cria uma variável para armazenar a palavra criptografada
    String palavraCriptografada = "";
    // Percorre cada letra da palavra
    for (int i = 0; i < palavra.length(); i++) {
      // Obtém o código ASCII da letra
      int codigo = (int) palavra.charAt(i);
      // Adiciona o deslocamento ao código
      codigo += deslocamento;
      // Se o código ultrapassar o limite do alfabeto, subtrai 26
      if (codigo > 90) {
        codigo -= 26;
      }
      // Converte o código de volta para uma letra
      char letra = (char) codigo;
      // Adiciona a letra à palavra criptografada
      palavraCriptografada += letra;
    }
    // Retorna a palavra criptografada
    return palavraCriptografada;
  }

  // Método para descriptografar uma palavra com um deslocamento dado
  public static String descriptografar(String palavra, int deslocamento) {
    // Converte a palavra para maiúscula
    palavra = palavra.toUpperCase();
    // Cria uma variável para armazenar a palavra descriptografada
    String palavraDescriptografada = "";
    // Percorre cada letra da palavra
    for (int i = 0; i < palavra.length(); i++) {
      // Obtém o código ASCII da letra
      int codigo = (int) palavra.charAt(i);
      // Subtrai o deslocamento do código
      codigo -= deslocamento;
      // Se o código ficar abaixo do limite do alfabeto, soma 26
      if (codigo < 65) {
        codigo += 26;
      }
      // Converte o código de volta para uma letra
      char letra = (char) codigo;
      // Adiciona a letra à palavra descriptografada
      palavraDescriptografada += letra;
    }
    // Retorna a palavra descriptografada
    return palavraDescriptografada;
  }
}
