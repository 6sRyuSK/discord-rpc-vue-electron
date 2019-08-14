import RPC from 'discord-rpc'

const clientId = '604255620295688202' //ここでclientIDを定義します
const scopes = ['rpc', 'rpc.api']

const client = new RPC.Client({ transport: 'ipc' })
export const login = () => {
  client.on('ready', () => {
    console.log('Logged in as', client.application.name)
    console.log('Authed for user', client.user.username)
    client.setActivity({
      details: 'testing Discord-rpc'
    })
  })
  // Log in to RPC with client id
  client.login({ clientId, scopes })
}