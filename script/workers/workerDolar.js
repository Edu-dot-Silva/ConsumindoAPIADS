async function conectaAPI(){
    const conecta = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL')
    const conectaTraduzido = await conecta.json()

    postMessage(conectaTraduzido.USDBRL)
// o codigo que conecta api estava no script mas foi colocado aqui com um worker para distribuir o processo
}

addEventListener('message',()=>{
    conectaAPI()
    setInterval(() => conectaAPI(),5000)
    })
