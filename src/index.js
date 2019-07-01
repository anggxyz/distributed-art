import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// for using metamask in the application 
import { MetamaskProvider } from '@0xcert/ethereum-metamask-provider'

// schema88 is the blueprint describing the type of ERC721 tokens we want to create
import { schema88 } from '@0xcert/conventions'

// used for certification of our assets
import { Cert } from '@0xcert/cert'

// assetledgers - for creating and using ledgers
// assetledgercapability - to indicate permissions that the ledger has when it comes to using the tokens inside it
import { AssetLedger, AssetLedgerCapability } from '@0xcert/ethereum-asset-ledger'

// Assets Ledgers are groups of tokens that are managed by certain users just like mods in a chat to do what's required
// The Capabilities determine what those mods can do with the assets they are managing
// The Ethereum address that deploys this ledger has full powers to do whatever he wants as the administrator



class Main extends React.Component {
      constructor () {
            super()

            this.state = {
                  provider: {},
                  ledger: {},
                  assets: []
            }
      }

      async componentDidMount () {
            await this.displayBlueprint ()
      }

      async displayBlueprint () {
            const cert = new Cert ({
                  schema: schema88
            })
            const asset = {
                  description: 'A Lighthouse Watercolor Picture',
                  image: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Taran_Lighthouse_Kalinigrad_Oblast_Tatiana_Yagunova_Watercolor_painting.jpg',
                  name: 'Lighthouse Watercolor'
            }
            console.log ('Imprint', await cert.imprint(asset))
            console.log('Expose', await cert.expose(asset, [['name'], ['image']]))
      }
      
      // To create a new asset ledger containing several assets and managed by several individuals
      // The asset ledger is mandatory to create new assets since they need a place to be stored, they can't exist without a ledger
      async deployNewLedger () {
            let deployedLedger = {}
            // required keys: name, symbol, uriBase and schemaId
            const recipe = {
                  name: 'Art Piece',
                  symbol: 'ART',
                  uriBase: 'www.example.com/tokenMetadata/', //This is a demonstration, you have to setup a server for generating tokens to this URI
                  schemaId: 
            }
      }

      render () {
            return (
                  <div>
                        <h1>ERC721 Art Marketplace</h1>
                        <p>In this marketplace you can deploy unique ERC721 art pieces to the blockchain with 0xcert.</p>
                        <div className="assets-container"></div>
                        <button className="margin-right">Deploy Art Piece</button>
                        <button>Get Art Pieces</button>
                  </div>
            )
      }
}

ReactDOM.render (<Main />, document.querySelector('#root'))