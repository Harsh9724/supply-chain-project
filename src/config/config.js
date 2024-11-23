export const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
export const rpcUrl = process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL;
export const contractAbi = {
  _format: "hh-sol-artifact-1",
  contractName: "SupplyChain",
  sourceName: "contracts/SupplyChain.sol",
  abi: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "int256",
          name: "orderId",
          type: "int256",
        },
        {
          indexed: false,
          internalType: "int256",
          name: "productId",
          type: "int256",
        },
        {
          indexed: false,
          internalType: "int256",
          name: "quantity",
          type: "int256",
        },
        {
          indexed: false,
          internalType: "string",
          name: "customerName",
          type: "string",
        },
        {
          indexed: false,
          internalType: "string",
          name: "status",
          type: "string",
        },
      ],
      name: "OrderPlaced",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "int256",
          name: "productId",
          type: "int256",
        },
        {
          indexed: false,
          internalType: "string",
          name: "productName",
          type: "string",
        },
        {
          indexed: false,
          internalType: "int256",
          name: "price",
          type: "int256",
        },
        {
          indexed: false,
          internalType: "int256",
          name: "quantity",
          type: "int256",
        },
      ],
      name: "ProductAdded",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_pname",
          type: "string",
        },
        {
          internalType: "int256",
          name: "_price",
          type: "int256",
        },
        {
          internalType: "int256",
          name: "_quantity",
          type: "int256",
        },
      ],
      name: "addProduct",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "int256",
          name: "_oid",
          type: "int256",
        },
      ],
      name: "getOrderById",
      outputs: [
        {
          components: [
            {
              internalType: "int256",
              name: "id",
              type: "int256",
            },
            {
              internalType: "int256",
              name: "productId",
              type: "int256",
            },
            {
              internalType: "int256",
              name: "quantity",
              type: "int256",
            },
            {
              internalType: "string",
              name: "customerName",
              type: "string",
            },
            {
              internalType: "string",
              name: "status",
              type: "string",
            },
            {
              internalType: "string",
              name: "deliveryAddress",
              type: "string",
            },
            {
              internalType: "address",
              name: "customerAddress",
              type: "address",
            },
          ],
          internalType: "struct SupplyChain.Order",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "int256",
          name: "_pid",
          type: "int256",
        },
      ],
      name: "getProductById",
      outputs: [
        {
          components: [
            {
              internalType: "int256",
              name: "id",
              type: "int256",
            },
            {
              internalType: "string",
              name: "productName",
              type: "string",
            },
            {
              internalType: "int256",
              name: "price",
              type: "int256",
            },
            {
              internalType: "int256",
              name: "quantity",
              type: "int256",
            },
            {
              internalType: "address",
              name: "producerAddress",
              type: "address",
            },
          ],
          internalType: "struct SupplyChain.Product",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_addr",
          type: "address",
        },
      ],
      name: "getTotalOrder",
      outputs: [
        {
          internalType: "int256",
          name: "",
          type: "int256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },

    {
      inputs: [],
      name: "getTotalProduct",
      outputs: [
        {
          internalType: "int256",
          name: "",
          type: "int256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },

    {
      inputs: [
        {
          internalType: "address",
          name: "_addr",
          type: "address",
        },
      ],
      name: "isRegistered",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "int256",
          name: "",
          type: "int256",
        },
      ],
      name: "orders",
      outputs: [
        {
          internalType: "int256",
          name: "id",
          type: "int256",
        },
        {
          internalType: "int256",
          name: "productId",
          type: "int256",
        },
        {
          internalType: "int256",
          name: "quantity",
          type: "int256",
        },
        {
          internalType: "string",
          name: "customerName",
          type: "string",
        },
        {
          internalType: "string",
          name: "status",
          type: "string",
        },
        {
          internalType: "string",
          name: "deliveryAddress",
          type: "string",
        },
        {
          internalType: "address",
          name: "customerAddress",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_cname",
          type: "string",
        },
        {
          internalType: "string",
          name: "_daddress",
          type: "string",
        },
        {
          internalType: "int256",
          name: "_pid",
          type: "int256",
        },
        {
          internalType: "int256",
          name: "_quantity",
          type: "int256",
        },
      ],
      name: "placeOrder",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "producers",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "int256",
          name: "",
          type: "int256",
        },
      ],
      name: "products",
      outputs: [
        {
          internalType: "int256",
          name: "id",
          type: "int256",
        },
        {
          internalType: "string",
          name: "productName",
          type: "string",
        },
        {
          internalType: "int256",
          name: "price",
          type: "int256",
        },
        {
          internalType: "int256",
          name: "quantity",
          type: "int256",
        },
        {
          internalType: "address",
          name: "producerAddress",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_name",
          type: "string",
        },
      ],
      name: "registerProducer",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "totalOrder",
      outputs: [
        {
          internalType: "int256",
          name: "",
          type: "int256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalProduct",
      outputs: [
        {
          internalType: "int256",
          name: "",
          type: "int256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
  bytecode:
    "0x608060405234801561001057600080fd5b506119be806100206000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063756b27f51161008c5780639023f273116100665780639023f2731461023e57806399b88fb61461025a578063b41a518414610276578063c3c5a547146102ac576100cf565b8063756b27f5146101d4578063775dd9881461020457806377f9861614610220576100cf565b80631288873c146100d4578063216e2a971461010457806326324eff146101225780632b34642314610152578063424acc9814610186578063566bceef146101b6575b600080fd5b6100ee60048036038101906100e991906110ab565b6102dc565b6040516100fb9190611651565b60405180910390f35b61010c610533565b6040516101199190611487565b60405180910390f35b61013c60048036038101906101379190611082565b610539565b60405161014991906115d1565b60405180910390f35b61016c600480360381019061016791906110ab565b6105d9565b60405161017d959493929190611577565b60405180910390f35b6101a0600480360381019061019b91906110ab565b6106b7565b6040516101ad9190611673565b60405180910390f35b6101be6107e9565b6040516101cb9190611487565b60405180910390f35b6101ee60048036038101906101e99190611082565b6107ef565b6040516101fb9190611487565b60405180910390f35b61021e600480360381019061021991906110d4565b61089c565b005b6102286108f3565b6040516102359190611487565b60405180910390f35b61025860048036038101906102539190611115565b6108fd565b005b610274600480360381019061026f919061117c565b610a30565b005b610290600480360381019061028b91906110ab565b610c64565b6040516102a397969594939291906114a2565b60405180910390f35b6102c660048036038101906102c19190611082565b610e5e565b6040516102d3919061146c565b60405180910390f35b6102e4610eb5565b600160008381526020019081526020016000206040518060e001604052908160008201548152602001600182015481526020016002820154815260200160038201805461033090611841565b80601f016020809104026020016040519081016040528092919081815260200182805461035c90611841565b80156103a95780601f1061037e576101008083540402835291602001916103a9565b820191906000526020600020905b81548152906001019060200180831161038c57829003601f168201915b505050505081526020016004820180546103c290611841565b80601f01602080910402602001604051908101604052809291908181526020018280546103ee90611841565b801561043b5780601f106104105761010080835404028352916020019161043b565b820191906000526020600020905b81548152906001019060200180831161041e57829003601f168201915b5050505050815260200160058201805461045490611841565b80601f016020809104026020016040519081016040528092919081815260200182805461048090611841565b80156104cd5780601f106104a2576101008083540402835291602001916104cd565b820191906000526020600020905b8154815290600101906020018083116104b057829003601f168201915b505050505081526020016006820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250509050919050565b60045481565b6002602052806000526040600020600091509050805461055890611841565b80601f016020809104026020016040519081016040528092919081815260200182805461058490611841565b80156105d15780601f106105a6576101008083540402835291602001916105d1565b820191906000526020600020905b8154815290600101906020018083116105b457829003601f168201915b505050505081565b600060205280600052604060002060009150905080600001549080600101805461060290611841565b80601f016020809104026020016040519081016040528092919081815260200182805461062e90611841565b801561067b5780601f106106505761010080835404028352916020019161067b565b820191906000526020600020905b81548152906001019060200180831161065e57829003601f168201915b5050505050908060020154908060030154908060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905085565b6106bf610f08565b6000808381526020019081526020016000206040518060a0016040529081600082015481526020016001820180546106f690611841565b80601f016020809104026020016040519081016040528092919081815260200182805461072290611841565b801561076f5780601f106107445761010080835404028352916020019161076f565b820191906000526020600020905b81548152906001019060200180831161075257829003601f168201915b5050505050815260200160028201548152602001600382015481526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250509050919050565b60035481565b600080600090506000600190505b6004548113610892578373ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060060160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561087f57818061087b90611873565b9250505b808061088a90611873565b9150506107fd565b5080915050919050565b80600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090805190602001906108ef929190610f4d565b5050565b6000600354905090565b6003600081548092919061091090611873565b91905055506040518060a0016040528060035481526020018481526020018381526020018281526020013373ffffffffffffffffffffffffffffffffffffffff16815250600080600354815260200190815260200160002060008201518160000155602082015181600101908051906020019061098e929190610f4d565b50604082015181600201556060820151816003015560808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050506003547f6547012823524072848b9fcdd4cde31123ef616eae5a398ce7b2292b5e0f7770848484604051610a23939291906115f3565b60405180910390a2505050565b80600080848152602001908152602001600020600301541215610a88576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a7f90611631565b60405180910390fd5b60046000815480929190610a9b90611873565b91905055506040518060e0016040528060045481526020018381526020018281526020018581526020016040518060400160405280600681526020017f506c61636564000000000000000000000000000000000000000000000000000081525081526020018481526020013373ffffffffffffffffffffffffffffffffffffffff168152506001600060045481526020019081526020016000206000820151816000015560208201518160010155604082015181600201556060820151816003019080519060200190610b6f929190610f4d565b506080820151816004019080519060200190610b8c929190610f4d565b5060a0820151816005019080519060200190610ba9929190610f4d565b5060c08201518160060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550905050806000808481526020019081526020016000206003016000828254610c199190611723565b925050819055506004547fd00f0f3777c33b773c687540b00fbc3da6cb7300632e8262d5bdc317a042e68f838387604051610c5693929190611526565b60405180910390a250505050565b6001602052806000526040600020600091509050806000015490806001015490806002015490806003018054610c9990611841565b80601f0160208091040260200160405190810160405280929190818152602001828054610cc590611841565b8015610d125780601f10610ce757610100808354040283529160200191610d12565b820191906000526020600020905b815481529060010190602001808311610cf557829003601f168201915b505050505090806004018054610d2790611841565b80601f0160208091040260200160405190810160405280929190818152602001828054610d5390611841565b8015610da05780601f10610d7557610100808354040283529160200191610da0565b820191906000526020600020905b815481529060010190602001808311610d8357829003601f168201915b505050505090806005018054610db590611841565b80601f0160208091040260200160405190810160405280929190818152602001828054610de190611841565b8015610e2e5780601f10610e0357610100808354040283529160200191610e2e565b820191906000526020600020905b815481529060010190602001808311610e1157829003601f168201915b5050505050908060060160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905087565b600080600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054610eab90611841565b9050119050919050565b6040518060e00160405280600081526020016000815260200160008152602001606081526020016060815260200160608152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b6040518060a0016040528060008152602001606081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b828054610f5990611841565b90600052602060002090601f016020900481019282610f7b5760008555610fc2565b82601f10610f9457805160ff1916838001178555610fc2565b82800160010185558215610fc2579182015b82811115610fc1578251825591602001919060010190610fa6565b5b509050610fcf9190610fd3565b5090565b5b80821115610fec576000816000905550600101610fd4565b5090565b6000611003610ffe846116c6565b611695565b90508281526020810184848401111561101b57600080fd5b6110268482856117ff565b509392505050565b60008135905061103d8161195a565b92915050565b60008135905061105281611971565b92915050565b600082601f83011261106957600080fd5b8135611079848260208601610ff0565b91505092915050565b60006020828403121561109457600080fd5b60006110a28482850161102e565b91505092915050565b6000602082840312156110bd57600080fd5b60006110cb84828501611043565b91505092915050565b6000602082840312156110e657600080fd5b600082013567ffffffffffffffff81111561110057600080fd5b61110c84828501611058565b91505092915050565b60008060006060848603121561112a57600080fd5b600084013567ffffffffffffffff81111561114457600080fd5b61115086828701611058565b935050602061116186828701611043565b925050604061117286828701611043565b9150509250925092565b6000806000806080858703121561119257600080fd5b600085013567ffffffffffffffff8111156111ac57600080fd5b6111b887828801611058565b945050602085013567ffffffffffffffff8111156111d557600080fd5b6111e187828801611058565b93505060406111f287828801611043565b925050606061120387828801611043565b91505092959194509250565b611218816117b7565b82525050565b611227816117b7565b82525050565b611236816117c9565b82525050565b611245816117d5565b82525050565b611254816117d5565b82525050565b6000611265826116f6565b61126f8185611701565b935061127f81856020860161180e565b61128881611949565b840191505092915050565b600061129e826116f6565b6112a88185611712565b93506112b881856020860161180e565b6112c181611949565b840191505092915050565b60006112d9600683611712565b91507f506c6163656400000000000000000000000000000000000000000000000000006000830152602082019050919050565b6000611319601d83611712565b91507f496e73756666696369656e742070726f64756374207175616e746974790000006000830152602082019050919050565b600060e083016000830151611364600086018261123c565b506020830151611377602086018261123c565b50604083015161138a604086018261123c565b50606083015184820360608601526113a2828261125a565b915050608083015184820360808601526113bc828261125a565b91505060a083015184820360a08601526113d6828261125a565b91505060c08301516113eb60c086018261120f565b508091505092915050565b600060a08301600083015161140e600086018261123c565b5060208301518482036020860152611426828261125a565b915050604083015161143b604086018261123c565b50606083015161144e606086018261123c565b506080830151611461608086018261120f565b508091505092915050565b6000602082019050611481600083018461122d565b92915050565b600060208201905061149c600083018461124b565b92915050565b600060e0820190506114b7600083018a61124b565b6114c4602083018961124b565b6114d1604083018861124b565b81810360608301526114e38187611293565b905081810360808301526114f78186611293565b905081810360a083015261150b8185611293565b905061151a60c083018461121e565b98975050505050505050565b600060808201905061153b600083018661124b565b611548602083018561124b565b818103604083015261155a8184611293565b9050818103606083015261156d816112cc565b9050949350505050565b600060a08201905061158c600083018861124b565b818103602083015261159e8187611293565b90506115ad604083018661124b565b6115ba606083018561124b565b6115c7608083018461121e565b9695505050505050565b600060208201905081810360008301526115eb8184611293565b905092915050565b6000606082019050818103600083015261160d8186611293565b905061161c602083018561124b565b611629604083018461124b565b949350505050565b6000602082019050818103600083015261164a8161130c565b9050919050565b6000602082019050818103600083015261166b818461134c565b905092915050565b6000602082019050818103600083015261168d81846113f6565b905092915050565b6000604051905081810181811067ffffffffffffffff821117156116bc576116bb61191a565b5b8060405250919050565b600067ffffffffffffffff8211156116e1576116e061191a565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600061172e826117d5565b9150611739836117d5565b9250827f800000000000000000000000000000000000000000000000000000000000000001821260008412151615611774576117736118bc565b5b827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0182136000841216156117ac576117ab6118bc565b5b828203905092915050565b60006117c2826117df565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b82818337600083830152505050565b60005b8381101561182c578082015181840152602081019050611811565b8381111561183b576000848401525b50505050565b6000600282049050600182168061185957607f821691505b6020821081141561186d5761186c6118eb565b5b50919050565b600061187e826117d5565b91507f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156118b1576118b06118bc565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b611963816117b7565b811461196e57600080fd5b50565b61197a816117d5565b811461198557600080fd5b5056fea264697066735822122029f7992a57ba3442a2f117fb1cf5f9a05925d568a5fdbf42e60b6834f64c65fe64736f6c63430008000033",
  deployedBytecode:
    "0x608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063756b27f51161008c5780639023f273116100665780639023f2731461023e57806399b88fb61461025a578063b41a518414610276578063c3c5a547146102ac576100cf565b8063756b27f5146101d4578063775dd9881461020457806377f9861614610220576100cf565b80631288873c146100d4578063216e2a971461010457806326324eff146101225780632b34642314610152578063424acc9814610186578063566bceef146101b6575b600080fd5b6100ee60048036038101906100e991906110ab565b6102dc565b6040516100fb9190611651565b60405180910390f35b61010c610533565b6040516101199190611487565b60405180910390f35b61013c60048036038101906101379190611082565b610539565b60405161014991906115d1565b60405180910390f35b61016c600480360381019061016791906110ab565b6105d9565b60405161017d959493929190611577565b60405180910390f35b6101a0600480360381019061019b91906110ab565b6106b7565b6040516101ad9190611673565b60405180910390f35b6101be6107e9565b6040516101cb9190611487565b60405180910390f35b6101ee60048036038101906101e99190611082565b6107ef565b6040516101fb9190611487565b60405180910390f35b61021e600480360381019061021991906110d4565b61089c565b005b6102286108f3565b6040516102359190611487565b60405180910390f35b61025860048036038101906102539190611115565b6108fd565b005b610274600480360381019061026f919061117c565b610a30565b005b610290600480360381019061028b91906110ab565b610c64565b6040516102a397969594939291906114a2565b60405180910390f35b6102c660048036038101906102c19190611082565b610e5e565b6040516102d3919061146c565b60405180910390f35b6102e4610eb5565b600160008381526020019081526020016000206040518060e001604052908160008201548152602001600182015481526020016002820154815260200160038201805461033090611841565b80601f016020809104026020016040519081016040528092919081815260200182805461035c90611841565b80156103a95780601f1061037e576101008083540402835291602001916103a9565b820191906000526020600020905b81548152906001019060200180831161038c57829003601f168201915b505050505081526020016004820180546103c290611841565b80601f01602080910402602001604051908101604052809291908181526020018280546103ee90611841565b801561043b5780601f106104105761010080835404028352916020019161043b565b820191906000526020600020905b81548152906001019060200180831161041e57829003601f168201915b5050505050815260200160058201805461045490611841565b80601f016020809104026020016040519081016040528092919081815260200182805461048090611841565b80156104cd5780601f106104a2576101008083540402835291602001916104cd565b820191906000526020600020905b8154815290600101906020018083116104b057829003601f168201915b505050505081526020016006820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250509050919050565b60045481565b6002602052806000526040600020600091509050805461055890611841565b80601f016020809104026020016040519081016040528092919081815260200182805461058490611841565b80156105d15780601f106105a6576101008083540402835291602001916105d1565b820191906000526020600020905b8154815290600101906020018083116105b457829003601f168201915b505050505081565b600060205280600052604060002060009150905080600001549080600101805461060290611841565b80601f016020809104026020016040519081016040528092919081815260200182805461062e90611841565b801561067b5780601f106106505761010080835404028352916020019161067b565b820191906000526020600020905b81548152906001019060200180831161065e57829003601f168201915b5050505050908060020154908060030154908060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905085565b6106bf610f08565b6000808381526020019081526020016000206040518060a0016040529081600082015481526020016001820180546106f690611841565b80601f016020809104026020016040519081016040528092919081815260200182805461072290611841565b801561076f5780601f106107445761010080835404028352916020019161076f565b820191906000526020600020905b81548152906001019060200180831161075257829003601f168201915b5050505050815260200160028201548152602001600382015481526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815250509050919050565b60035481565b600080600090506000600190505b6004548113610892578373ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060060160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561087f57818061087b90611873565b9250505b808061088a90611873565b9150506107fd565b5080915050919050565b80600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090805190602001906108ef929190610f4d565b5050565b6000600354905090565b6003600081548092919061091090611873565b91905055506040518060a0016040528060035481526020018481526020018381526020018281526020013373ffffffffffffffffffffffffffffffffffffffff16815250600080600354815260200190815260200160002060008201518160000155602082015181600101908051906020019061098e929190610f4d565b50604082015181600201556060820151816003015560808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050506003547f6547012823524072848b9fcdd4cde31123ef616eae5a398ce7b2292b5e0f7770848484604051610a23939291906115f3565b60405180910390a2505050565b80600080848152602001908152602001600020600301541215610a88576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a7f90611631565b60405180910390fd5b60046000815480929190610a9b90611873565b91905055506040518060e0016040528060045481526020018381526020018281526020018581526020016040518060400160405280600681526020017f506c61636564000000000000000000000000000000000000000000000000000081525081526020018481526020013373ffffffffffffffffffffffffffffffffffffffff168152506001600060045481526020019081526020016000206000820151816000015560208201518160010155604082015181600201556060820151816003019080519060200190610b6f929190610f4d565b506080820151816004019080519060200190610b8c929190610f4d565b5060a0820151816005019080519060200190610ba9929190610f4d565b5060c08201518160060160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550905050806000808481526020019081526020016000206003016000828254610c199190611723565b925050819055506004547fd00f0f3777c33b773c687540b00fbc3da6cb7300632e8262d5bdc317a042e68f838387604051610c5693929190611526565b60405180910390a250505050565b6001602052806000526040600020600091509050806000015490806001015490806002015490806003018054610c9990611841565b80601f0160208091040260200160405190810160405280929190818152602001828054610cc590611841565b8015610d125780601f10610ce757610100808354040283529160200191610d12565b820191906000526020600020905b815481529060010190602001808311610cf557829003601f168201915b505050505090806004018054610d2790611841565b80601f0160208091040260200160405190810160405280929190818152602001828054610d5390611841565b8015610da05780601f10610d7557610100808354040283529160200191610da0565b820191906000526020600020905b815481529060010190602001808311610d8357829003601f168201915b505050505090806005018054610db590611841565b80601f0160208091040260200160405190810160405280929190818152602001828054610de190611841565b8015610e2e5780601f10610e0357610100808354040283529160200191610e2e565b820191906000526020600020905b815481529060010190602001808311610e1157829003601f168201915b5050505050908060060160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905087565b600080600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054610eab90611841565b9050119050919050565b6040518060e00160405280600081526020016000815260200160008152602001606081526020016060815260200160608152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b6040518060a0016040528060008152602001606081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b828054610f5990611841565b90600052602060002090601f016020900481019282610f7b5760008555610fc2565b82601f10610f9457805160ff1916838001178555610fc2565b82800160010185558215610fc2579182015b82811115610fc1578251825591602001919060010190610fa6565b5b509050610fcf9190610fd3565b5090565b5b80821115610fec576000816000905550600101610fd4565b5090565b6000611003610ffe846116c6565b611695565b90508281526020810184848401111561101b57600080fd5b6110268482856117ff565b509392505050565b60008135905061103d8161195a565b92915050565b60008135905061105281611971565b92915050565b600082601f83011261106957600080fd5b8135611079848260208601610ff0565b91505092915050565b60006020828403121561109457600080fd5b60006110a28482850161102e565b91505092915050565b6000602082840312156110bd57600080fd5b60006110cb84828501611043565b91505092915050565b6000602082840312156110e657600080fd5b600082013567ffffffffffffffff81111561110057600080fd5b61110c84828501611058565b91505092915050565b60008060006060848603121561112a57600080fd5b600084013567ffffffffffffffff81111561114457600080fd5b61115086828701611058565b935050602061116186828701611043565b925050604061117286828701611043565b9150509250925092565b6000806000806080858703121561119257600080fd5b600085013567ffffffffffffffff8111156111ac57600080fd5b6111b887828801611058565b945050602085013567ffffffffffffffff8111156111d557600080fd5b6111e187828801611058565b93505060406111f287828801611043565b925050606061120387828801611043565b91505092959194509250565b611218816117b7565b82525050565b611227816117b7565b82525050565b611236816117c9565b82525050565b611245816117d5565b82525050565b611254816117d5565b82525050565b6000611265826116f6565b61126f8185611701565b935061127f81856020860161180e565b61128881611949565b840191505092915050565b600061129e826116f6565b6112a88185611712565b93506112b881856020860161180e565b6112c181611949565b840191505092915050565b60006112d9600683611712565b91507f506c6163656400000000000000000000000000000000000000000000000000006000830152602082019050919050565b6000611319601d83611712565b91507f496e73756666696369656e742070726f64756374207175616e746974790000006000830152602082019050919050565b600060e083016000830151611364600086018261123c565b506020830151611377602086018261123c565b50604083015161138a604086018261123c565b50606083015184820360608601526113a2828261125a565b915050608083015184820360808601526113bc828261125a565b91505060a083015184820360a08601526113d6828261125a565b91505060c08301516113eb60c086018261120f565b508091505092915050565b600060a08301600083015161140e600086018261123c565b5060208301518482036020860152611426828261125a565b915050604083015161143b604086018261123c565b50606083015161144e606086018261123c565b506080830151611461608086018261120f565b508091505092915050565b6000602082019050611481600083018461122d565b92915050565b600060208201905061149c600083018461124b565b92915050565b600060e0820190506114b7600083018a61124b565b6114c4602083018961124b565b6114d1604083018861124b565b81810360608301526114e38187611293565b905081810360808301526114f78186611293565b905081810360a083015261150b8185611293565b905061151a60c083018461121e565b98975050505050505050565b600060808201905061153b600083018661124b565b611548602083018561124b565b818103604083015261155a8184611293565b9050818103606083015261156d816112cc565b9050949350505050565b600060a08201905061158c600083018861124b565b818103602083015261159e8187611293565b90506115ad604083018661124b565b6115ba606083018561124b565b6115c7608083018461121e565b9695505050505050565b600060208201905081810360008301526115eb8184611293565b905092915050565b6000606082019050818103600083015261160d8186611293565b905061161c602083018561124b565b611629604083018461124b565b949350505050565b6000602082019050818103600083015261164a8161130c565b9050919050565b6000602082019050818103600083015261166b818461134c565b905092915050565b6000602082019050818103600083015261168d81846113f6565b905092915050565b6000604051905081810181811067ffffffffffffffff821117156116bc576116bb61191a565b5b8060405250919050565b600067ffffffffffffffff8211156116e1576116e061191a565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600061172e826117d5565b9150611739836117d5565b9250827f800000000000000000000000000000000000000000000000000000000000000001821260008412151615611774576117736118bc565b5b827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0182136000841216156117ac576117ab6118bc565b5b828203905092915050565b60006117c2826117df565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b82818337600083830152505050565b60005b8381101561182c578082015181840152602081019050611811565b8381111561183b576000848401525b50505050565b6000600282049050600182168061185957607f821691505b6020821081141561186d5761186c6118eb565b5b50919050565b600061187e826117d5565b91507f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156118b1576118b06118bc565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b611963816117b7565b811461196e57600080fd5b50565b61197a816117d5565b811461198557600080fd5b5056fea264697066735822122029f7992a57ba3442a2f117fb1cf5f9a05925d568a5fdbf42e60b6834f64c65fe64736f6c63430008000033",
  linkReferences: {},
  deployedLinkReferences: {},
};
