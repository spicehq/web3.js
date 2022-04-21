export const basicContractAbi = [
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_val',
				type: 'uint256',
			},
			{
				internalType: 'string',
				name: '_stringValue',
				type: 'string',
			},
		],
		stateMutability: 'nonpayable',
		type: 'constructor',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'string',
				name: 'str',
				type: 'string',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'val',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'bool',
				name: 'flag',
				type: 'bool',
			},
		],
		name: 'MultiValueEvent',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'string',
				name: 'str',
				type: 'string',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'val',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'bool',
				name: 'flag',
				type: 'bool',
			},
		],
		name: 'MultiValueIndexedEvent',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'string',
				name: 'str',
				type: 'string',
			},
		],
		name: 'StringEvent',
		type: 'event',
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: 'str',
				type: 'string',
			},
			{
				internalType: 'uint256',
				name: 'val',
				type: 'uint256',
			},
			{
				internalType: 'bool',
				name: 'flag',
				type: 'bool',
			},
		],
		name: 'firesMultiValueEvent',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: 'str',
				type: 'string',
			},
			{
				internalType: 'uint256',
				name: 'val',
				type: 'uint256',
			},
			{
				internalType: 'bool',
				name: 'flag',
				type: 'bool',
			},
		],
		name: 'firesMultiValueIndexedEvent',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'string',
				name: '_str',
				type: 'string',
			},
		],
		name: 'firesStringEvent',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getBoolValue',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getIntValue',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getStringValue',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getValues',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
			{
				internalType: 'bool',
				name: '',
				type: 'bool',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'requireWithReason',
		outputs: [],
		stateMutability: 'pure',
		type: 'function',
	},
	{
		inputs: [],
		name: 'requireWithoutReason',
		outputs: [],
		stateMutability: 'pure',
		type: 'function',
	},
	{
		inputs: [],
		name: 'reverts',
		outputs: [],
		stateMutability: 'pure',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_value',
				type: 'uint256',
			},
			{
				internalType: 'string',
				name: '_stringValue',
				type: 'string',
			},
			{
				internalType: 'bool',
				name: '_boolValue',
				type: 'bool',
			},
		],
		name: 'setValues',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
] as const;

export const basicContractByteCode =
	'0x60806040523480156200001157600080fd5b5060405162000ed638038062000ed68339818101604052810190620000379190620002e7565b816000819055508060019080519060200190620000569291906200005f565b505050620003b1565b8280546200006d906200037c565b90600052602060002090601f016020900481019282620000915760008555620000dd565b82601f10620000ac57805160ff1916838001178555620000dd565b82800160010185558215620000dd579182015b82811115620000dc578251825591602001919060010190620000bf565b5b509050620000ec9190620000f0565b5090565b5b808211156200010b576000816000905550600101620000f1565b5090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b620001388162000123565b81146200014457600080fd5b50565b60008151905062000158816200012d565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620001b38262000168565b810181811067ffffffffffffffff82111715620001d557620001d462000179565b5b80604052505050565b6000620001ea6200010f565b9050620001f88282620001a8565b919050565b600067ffffffffffffffff8211156200021b576200021a62000179565b5b620002268262000168565b9050602081019050919050565b60005b838110156200025357808201518184015260208101905062000236565b8381111562000263576000848401525b50505050565b6000620002806200027a84620001fd565b620001de565b9050828152602081018484840111156200029f576200029e62000163565b5b620002ac84828562000233565b509392505050565b600082601f830112620002cc57620002cb6200015e565b5b8151620002de84826020860162000269565b91505092915050565b6000806040838503121562000301576200030062000119565b5b6000620003118582860162000147565b925050602083015167ffffffffffffffff8111156200033557620003346200011e565b5b6200034385828601620002b4565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200039557607f821691505b602082108103620003ab57620003aa6200034d565b5b50919050565b610b1580620003c16000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c8063844d6a3211610071578063844d6a3214610130578063939d7c4e1461013a578063ae012ede14610156578063b7a8238a14610160578063d7af8ac11461017c578063e8256ea014610198576100a9565b806319eb4a90146100ae5780632bfc4c69146100ce5780633bccbbc9146100ec5780635a018657146100f6578063828909bd14610112575b600080fd5b6100b66101b6565b6040516100c59392919061060b565b60405180910390f35b6100d6610267565b6040516100e39190610649565b60405180910390f35b6100f46102f9565b005b610110600480360381019061010b919061080c565b610334565b005b61011a610374565b604051610127919061087b565b60405180910390f35b61013861037d565b005b610154600480360381019061014f919061080c565b6103c0565b005b61015e610400565b005b61017a60048036038101906101759190610896565b61040d565b005b610196600480360381019061019191906108df565b610447565b005b6101a0610484565b6040516101ad919061094e565b60405180910390f35b60006060600080546001600260009054906101000a900460ff168180546101dc90610998565b80601f016020809104026020016040519081016040528092919081815260200182805461020890610998565b80156102555780601f1061022a57610100808354040283529160200191610255565b820191906000526020600020905b81548152906001019060200180831161023857829003601f168201915b50505050509150925092509250909192565b60606001805461027690610998565b80601f01602080910402602001604051908101604052809291908181526020018280546102a290610998565b80156102ef5780601f106102c4576101008083540402835291602001916102ef565b820191906000526020600020905b8154815290600101906020018083116102d257829003601f168201915b5050505050905090565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032b90610a15565b60405180910390fd5b7fa8297798732ff8a80a23cf22707934835a9d5b03536598708f7414646a1b95b383838360405161036793929190610a35565b60405180910390a1505050565b60008054905090565b60006103be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103b590610abf565b60405180910390fd5b565b801515827f553c4a49a36d26504ba0880f2f9bfe9ac7db4b81a893bde296546cd96ae0b33c856040516103f39190610649565b60405180910390a3505050565b600061040b57600080fd5b565b7f617cf8a4400dd7963ed519ebe655a16e8da1282bb8fea36a21f634af912f54ab8160405161043c9190610649565b60405180910390a150565b82600081905550816001908051906020019061046492919061049b565b5080600260006101000a81548160ff021916908315150217905550505050565b6000600260009054906101000a900460ff16905090565b8280546104a790610998565b90600052602060002090601f0160209004810192826104c95760008555610510565b82601f106104e257805160ff1916838001178555610510565b82800160010185558215610510579182015b8281111561050f5782518255916020019190600101906104f4565b5b50905061051d9190610521565b5090565b5b8082111561053a576000816000905550600101610522565b5090565b6000819050919050565b6105518161053e565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610591578082015181840152602081019050610576565b838111156105a0576000848401525b50505050565b6000601f19601f8301169050919050565b60006105c282610557565b6105cc8185610562565b93506105dc818560208601610573565b6105e5816105a6565b840191505092915050565b60008115159050919050565b610605816105f0565b82525050565b60006060820190506106206000830186610548565b818103602083015261063281856105b7565b905061064160408301846105fc565b949350505050565b6000602082019050818103600083015261066381846105b7565b905092915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6106c1826105a6565b810181811067ffffffffffffffff821117156106e0576106df610689565b5b80604052505050565b60006106f361066b565b90506106ff82826106b8565b919050565b600067ffffffffffffffff82111561071f5761071e610689565b5b610728826105a6565b9050602081019050919050565b82818337600083830152505050565b600061075761075284610704565b6106e9565b90508281526020810184848401111561077357610772610684565b5b61077e848285610735565b509392505050565b600082601f83011261079b5761079a61067f565b5b81356107ab848260208601610744565b91505092915050565b6107bd8161053e565b81146107c857600080fd5b50565b6000813590506107da816107b4565b92915050565b6107e9816105f0565b81146107f457600080fd5b50565b600081359050610806816107e0565b92915050565b60008060006060848603121561082557610824610675565b5b600084013567ffffffffffffffff8111156108435761084261067a565b5b61084f86828701610786565b9350506020610860868287016107cb565b9250506040610871868287016107f7565b9150509250925092565b60006020820190506108906000830184610548565b92915050565b6000602082840312156108ac576108ab610675565b5b600082013567ffffffffffffffff8111156108ca576108c961067a565b5b6108d684828501610786565b91505092915050565b6000806000606084860312156108f8576108f7610675565b5b6000610906868287016107cb565b935050602084013567ffffffffffffffff8111156109275761092661067a565b5b61093386828701610786565b9250506040610944868287016107f7565b9150509250925092565b600060208201905061096360008301846105fc565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806109b057607f821691505b6020821081036109c3576109c2610969565b5b50919050565b7f5245564552544544205749544820524556455254000000000000000000000000600082015250565b60006109ff601483610562565b9150610a0a826109c9565b602082019050919050565b60006020820190508181036000830152610a2e816109f2565b9050919050565b60006060820190508181036000830152610a4f81866105b7565b9050610a5e6020830185610548565b610a6b60408301846105fc565b949350505050565b7f5245564552544544205749544820524551554952450000000000000000000000600082015250565b6000610aa9601583610562565b9150610ab482610a73565b602082019050919050565b60006020820190508181036000830152610ad881610a9c565b905091905056fea264697066735822122049f32b92a0e2c8e807ce91f57a542a88351caa4edde9642c09842c94b955495364736f6c634300080d0033';
