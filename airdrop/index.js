const {Connection,PublicKey,clusterApiUrl,Keypair,LAMPORTS_PER_SOL}=require('@solana/web3.js')
const wallet=new Keypair()

const publicKey=new PublicKey(wallet._keypair.publicKey)
const secretKey =wallet._keypair.secretKey

// console.log(publicKey)
// console.log(secretKey)

const getWalletBalance=async()=>
{
    try{
        const connection=new Connection(clusterApiUrl('testnet'),'confirmed')
        const walletBalance=await connection.getBalance(publicKey)
    console.log("wallet bal "+walletBalance)
    }

    catch(err)
    {
        console.error(err)
    }
}
const airDropsol=async()=>
{
    try{
        const connection=new Connection(clusterApiUrl('testnet'),'confirmed')
        const fromAirDropSignature =await connection.requestAirdrop(publicKey,2*LAMPORTS_PER_SOL)
        await  connection.confirmTransaction(fromAirDropSignature)
    }
    catch
    {

    }
}
async function  main()
{
await getWalletBalance()
await airDropsol()

}
main()