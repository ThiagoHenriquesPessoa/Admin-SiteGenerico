export class Base64Service {

  async convertToBase64(file: File): Promise<string> {
    return await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            if (reader.result) {
                resolve(reader.result.toString().split(',')[1]);
            } else {
                reject(new Error("Erro ao ler o arquivo"));
            }
        };
        reader.onerror = () => {
            reject(new Error("Erro ao carregar o arquivo"));
        };
        reader.readAsDataURL(file);
    });
  }
}
