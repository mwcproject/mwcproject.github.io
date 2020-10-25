var searchIndex = JSON.parse('{\
"grin_wallet_api":{"doc":"Higher level wallet functions which can be used by callers…","i":[[3,"Foreign","grin_wallet_api","Main interface into all wallet API functions. Wallet APIs…",null,null],[12,"wallet_inst","","Wallet instance",0,null],[12,"doctest_mode","","Flag to normalize some output during testing. Can mostly…",0,null],[3,"Owner","","Main interface into all wallet API functions. Wallet APIs…",null,null],[12,"wallet_inst","","contain all methods to manage the wallet",1,null],[12,"doctest_mode","","Flag to normalize some output during testing. Can mostly…",1,null],[12,"shared_key","","Share ECDH key",1,null],[12,"updater_running","","Stop state for update thread",1,null],[3,"ECDHPubkey","","Wrapper for ECDH Public keys",null,null],[12,"ecdh_pubkey","","public key, flattened",2,null],[3,"EncryptedRequest","","Wrapper for secure JSON requests",null,null],[12,"jsonrpc","","JSON RPC response",3,null],[12,"method","","method",3,null],[12,"id","","id",3,null],[12,"params","","Body params, which includes nonce and encrypted request",3,null],[3,"EncryptedResponse","","Wrapper for secure JSON requests",null,null],[12,"jsonrpc","","JSON RPC response",4,null],[12,"id","","id",4,null],[12,"result","","result",4,null],[3,"EncryptionErrorResponse","","Wrapper for encryption error responses",null,null],[12,"jsonrpc","","JSON RPC response",5,null],[12,"id","","id",5,null],[12,"error","","error",5,null],[3,"PubAddress","","Wrapper for dalek public keys, used as addresses",null,null],[12,"address","","Public address",6,null],[3,"Token","","Wrapper for API Tokens",null,null],[12,"keychain_mask","","Token to XOR mask against the stored wallet seed",7,null],[4,"ForeignCheckMiddlewareFn","","Middleware Identifiers for each function",null,null],[13,"CheckVersion","","check_version",8,null],[13,"BuildCoinbase","","build_coinbase",8,null],[13,"VerifySlateMessages","","verify_slate_messages",8,null],[13,"ReceiveTx","","receive_tx",8,null],[13,"FinalizeInvoiceTx","","finalize_invoice_tx",8,null],[4,"foreign_rpc_client","","Helper module for jsonrpc clients. Automatically generated…",null,null],[4,"JsonId","","Represents a compliant JSON RPC 2.0 id. Valid id: Integer,…",null,null],[13,"IntId","","Integer Id",9,null],[13,"StrId","","String Id",9,null],[5,"run_doctest_foreign","","helper to set up a real environment to run integrated…",null,[[["value",4]],[["string",3],["option",4],["result",4]]]],[5,"run_doctest_owner","","helper to set up a real environment to run integrated…",null,[[["value",4]],[["string",3],["option",4],["result",4]]]],[11,"new","","Create a new API instance with the given wallet instance.…",0,[[["secretkey",3],["option",4],["option",4],["mutex",6],["arc",3],["foreigncheckmiddleware",6]]]],[11,"check_version","","Return the version capabilities of the running ForeignApi…",0,[[],[["result",4],["error",3],["versioninfo",3]]]],[11,"get_proof_address","","Return the tor proof address # Arguments None # Returns *…",0,[[],[["string",3],["result",4],["error",3]]]],[11,"build_coinbase","","Builds a new unconfirmed coinbase output in the wallet,…",0,[[["blockfees",3]],[["result",4],["cbdata",3],["error",3]]]],[11,"verify_slate_messages","","Verifies all messages in the slate match their public keys.",0,[[["slate",3]],[["result",4],["error",3]]]],[11,"receive_tx","","Recieve a tranaction created by another party, returning…",0,[[["string",3],["option",4],["slate",3],["option",4]],[["error",3],["result",4],["slate",3]]]],[11,"finalize_invoice_tx","","Finalizes an invoice transaction initiated by this…",0,[[["slate",3]],[["error",3],["result",4],["slate",3]]]],[11,"receive_swap_message","","",0,[[["string",3]],[["result",4],["error",3]]]],[11,"check_version","","Request generator for jsonrpc clients. Automatically…",10,[[],[["argserializeerror",3],["result",4],["boundmethod",3]]]],[11,"get_proof_address","","Request generator for jsonrpc clients. Automatically…",10,[[],[["result",4],["boundmethod",3],["argserializeerror",3]]]],[11,"build_coinbase","","Request generator for jsonrpc clients. Automatically…",10,[[["blockfees",3]],[["argserializeerror",3],["result",4],["boundmethod",3]]]],[11,"verify_slate_messages","","Request generator for jsonrpc clients. Automatically…",10,[[["versionedslate",4]],[["boundmethod",3],["result",4],["argserializeerror",3]]]],[11,"receive_tx","","Request generator for jsonrpc clients. Automatically…",10,[[["string",3],["versionedslate",4],["option",4]],[["result",4],["argserializeerror",3],["boundmethod",3]]]],[11,"finalize_invoice_tx","","Request generator for jsonrpc clients. Automatically…",10,[[["versionedslate",4]],[["result",4],["argserializeerror",3],["boundmethod",3]]]],[11,"receive_swap_message","","Request generator for jsonrpc clients. Automatically…",10,[[["string",3]],[["boundmethod",3],["result",4],["argserializeerror",3]]]],[11,"new","","Create a new API instance with the given wallet instance.…",1,[[["option",4],["torconfig",3],["sender",3],["mutex",6],["arc",3],["option",4]]]],[11,"set_tor_config","","Set the TOR configuration for this instance of the…",1,[[["option",4],["torconfig",3]]]],[11,"accounts","","Returns a list of accounts stored in the wallet (i.e.…",1,[[["option",4],["secretkey",3]],[["vec",3],["result",4],["error",3]]]],[11,"create_account_path","","Creates a new \'account\', which is a mapping of a…",1,[[["option",4],["secretkey",3]],[["identifier",3],["error",3],["result",4]]]],[11,"set_active_account","","Sets the wallet\'s currently active account. This sets the…",1,[[["option",4],["secretkey",3]],[["result",4],["error",3]]]],[11,"retrieve_outputs","","Returns a list of outputs from the active account in the…",1,[[["option",4],["secretkey",3],["option",4]],[["error",3],["result",4]]]],[11,"retrieve_txs","","Returns a list of Transaction Log Entries from the active…",1,[[["option",4],["option",4],["option",4],["secretkey",3],["uuid",3]],[["error",3],["result",4]]]],[11,"retrieve_summary_info","","Returns summary information from the active account in the…",1,[[["option",4],["secretkey",3]],[["result",4],["error",3]]]],[11,"init_send_tx","","Initiates a new transaction as the sender, creating a new…",1,[[["option",4],["secretkey",3],["inittxargs",3]],[["error",3],["result",4],["slate",3]]]],[11,"issue_invoice_tx","","Issues a new invoice transaction slate, essentially a…",1,[[["option",4],["secretkey",3],["issueinvoicetxargs",3]],[["error",3],["result",4],["slate",3]]]],[11,"process_invoice_tx","","Processes an invoice tranaction created by another party,…",1,[[["option",4],["slate",3],["secretkey",3],["inittxargs",3]],[["error",3],["result",4],["slate",3]]]],[11,"tx_lock_outputs","","Locks the outputs associated with the inputs to the…",1,[[["string",3],["option",4],["slate",3],["secretkey",3],["option",4]],[["result",4],["error",3]]]],[11,"finalize_tx","","Finalizes a transaction, after all parties have filled in…",1,[[["option",4],["secretkey",3],["slate",3]],[["error",3],["result",4],["slate",3]]]],[11,"post_tx","","Posts a completed transaction to the listening node for…",1,[[["transaction",3],["option",4],["secretkey",3]],[["result",4],["error",3]]]],[11,"cancel_tx","","Cancels a transaction. This entails: * Setting the…",1,[[["option",4],["option",4],["option",4],["secretkey",3],["uuid",3]],[["result",4],["error",3]]]],[11,"get_stored_tx","","Retrieves the stored transaction associated with a…",1,[[["txlogentry",3],["option",4],["secretkey",3]],[["result",4],["option",4],["error",3]]]],[11,"load_stored_tx","","Loads a stored transaction from a file",1,[[["string",3]],[["error",3],["result",4],["transaction",3]]]],[11,"verify_slate_messages","","Verifies all messages in the slate match their public keys.",1,[[["option",4],["secretkey",3],["slate",3]],[["result",4],["error",3]]]],[11,"scan","","Scans the entire UTXO set from the node, identify which…",1,[[["option",4],["option",4],["secretkey",3]],[["result",4],["error",3]]]],[11,"dump_wallet_data","","Dump wallet data (outputs,transactions) into the logs",1,[[["string",3],["option",4]],[["result",4],["error",3]]]],[11,"node_height","","Retrieves the last known height known by the wallet. This…",1,[[["option",4],["secretkey",3]],[["result",4],["error",3],["nodeheightresult",3]]]],[11,"get_top_level_directory","","Retrieve the top-level directory for the wallet. This…",1,[[],[["string",3],["result",4],["error",3]]]],[11,"set_top_level_directory","","Set the top-level directory for the wallet. This directory…",1,[[],[["result",4],["error",3]]]],[11,"create_config","","Create a `mwc-wallet.toml` configuration file in the…",1,[[["option",4],["walletconfig",3],["option",4],["loggingconfig",3],["chaintypes",4],["option",4],["torconfig",3],["option",4],["mqsconfig",3]],[["result",4],["error",3]]]],[11,"create_wallet","","Creates a new wallet seed and empty wallet database in the…",1,[[["zeroingstring",3],["option",4],["option",4]],[["result",4],["error",3]]]],[11,"open_wallet","","`Opens` a wallet, populating the internal keychain with…",1,[[["zeroingstring",3],["option",4]],[["option",4],["error",3],["result",4]]]],[11,"close_wallet","","`Close` a wallet, removing the master seed from memory.",1,[[["option",4]],[["result",4],["error",3]]]],[11,"get_mnemonic","","Return the BIP39 mnemonic for the given wallet. This…",1,[[["zeroingstring",3],["option",4]],[["zeroingstring",3],["error",3],["result",4]]]],[11,"change_password","","Changes a wallet\'s password, meaning the old seed file is…",1,[[["zeroingstring",3],["option",4]],[["result",4],["error",3]]]],[11,"delete_wallet","","Deletes a wallet, removing the config file, seed file and…",1,[[["option",4]],[["result",4],["error",3]]]],[11,"start_updater","","Starts a background wallet update thread, which performs…",1,[[["duration",3],["option",4],["secretkey",3]],[["result",4],["error",3]]]],[11,"stop_updater","","Stops the background update thread. If the updater is…",1,[[],[["result",4],["error",3]]]],[11,"get_updater_messages","","Retrieve messages from the updater thread, up to `count`…",1,[[],[["error",3],["result",4],["vec",3]]]],[11,"get_public_proof_address","","Retrieve the public proof \\\"addresses\\\" associated with the…",1,[[["option",4],["secretkey",3]],[["publickey",3],["result",4],["error",3]]]],[11,"proof_address_from_onion_v3","","Helper function to convert an Onion v3 address to a…",1,[[],[["dalekpublickey",3],["error",3],["result",4]]]],[11,"retrieve_payment_proof","","Returns a single, exportable PaymentProof from a completed…",1,[[["option",4],["option",4],["option",4],["secretkey",3],["uuid",3]],[["error",3],["result",4],["paymentproof",3]]]],[11,"get_stored_tx_proof","","",1,[[["option",4],["secretkey",3],["option",4]],[["txproof",3],["error",3],["result",4]]]],[11,"verify_payment_proof","","Verifies a PaymentProof This process entails:",1,[[["option",4],["secretkey",3],["paymentproof",3]],[["result",4],["error",3]]]],[11,"swap_start","","Start swap trade process. Return SwapID that can be used…",1,[[["swapstartargs",3],["option",4],["secretkey",3]],[["string",3],["result",4],["error",3]]]],[11,"swap_create_from_offer","","",1,[[["string",3],["option",4],["secretkey",3]],[["string",3],["result",4],["error",3]]]],[11,"swap_list","","List all available swap operations. SwapId & Status",1,[[["option",4],["secretkey",3]],[["vec",3],["error",3],["result",4]]]],[11,"swap_delete","","Delete swap trade",1,[[["string",3],["option",4],["secretkey",3]],[["result",4],["error",3]]]],[11,"swap_get","","Retrieve swap trade",1,[[["string",3],["option",4],["secretkey",3]],[["error",3],["result",4],["swap",3]]]],[11,"swap_adjust","","Adjust the sate of swap trade. method & destination…",1,[[["string",3],["option",4],["option",4],["secretkey",3],["option",4]],[["result",4],["error",3]]]],[11,"swap_dump","","Dump swap file content",1,[[["string",3],["option",4],["secretkey",3]],[["string",3],["result",4],["error",3]]]],[11,"update_swap_status_action","","Refresh and get a status and current expected action for…",1,[[["string",3],["option",4],["secretkey",3],["option",4]],[["error",3],["result",4]]]],[11,"get_swap_tx_tstatus","","Get a status of the transactions that involved into the…",1,[[["string",3],["option",4],["secretkey",3],["option",4]],[["result",4],["swaptransactionsconfirmations",3],["error",3]]]],[11,"swap_process","","",1,[[["string",3],["option",4],["option",4],["secretkey",3],["option",4]],[["stateprocessrespond",3],["error",3],["result",4]]]],[11,"swap_income_message","","Process swap income message",1,[[["string",3],["option",4],["secretkey",3]],[["result",4],["error",3],["option",4]]]],[11,"from_json","","from json",3,[[["value",4],["jsonid",4],["secretkey",3]],[["error",3],["result",4]]]],[11,"as_json_value","","return serialize JSON self",3,[[],[["result",4],["value",4],["error",3]]]],[11,"as_json_str","","return serialized JSON self as string",3,[[],[["string",3],["result",4],["error",3]]]],[11,"decrypt","","Return decrypted body",3,[[["secretkey",3]],[["result",4],["value",4],["error",3]]]],[11,"from_json","","from json",4,[[["value",4],["jsonid",4],["secretkey",3]],[["error",3],["result",4]]]],[11,"as_json_value","","return serialize JSON self",4,[[],[["result",4],["value",4],["error",3]]]],[11,"as_json_str","","return serialized JSON self as string",4,[[],[["string",3],["result",4],["error",3]]]],[11,"decrypt","","Return decrypted body",4,[[["secretkey",3]],[["result",4],["value",4],["error",3]]]],[11,"new","","Create new response",5,[[]]],[11,"as_json_value","","return serialized JSON self",5,[[],["value",4]]],[6,"ForeignCheckMiddleware","","ForeignAPI Middleware Check callback",null,null],[8,"ForeignRpc","","Public definition used to generate Foreign jsonrpc api. *…",null,null],[10,"check_version","","Networked version of Foreign::check_version.",11,[[],[["result",4],["versioninfo",3],["errorkind",4]]]],[10,"get_proof_address","","Networked version of Foreign::check_version.",11,[[],[["string",3],["result",4],["errorkind",4]]]],[10,"build_coinbase","","Networked Legacy (non-secure token) version of…",11,[[["blockfees",3]],[["errorkind",4],["versionedcoinbase",4],["result",4]]]],[10,"verify_slate_messages","","Networked version of Foreign::verify_slate_messages.",11,[[["versionedslate",4]],[["result",4],["errorkind",4]]]],[10,"receive_tx","","Networked version of Foreign::receive_tx.",11,[[["string",3],["versionedslate",4],["option",4]],[["errorkind",4],["versionedslate",4],["result",4]]]],[10,"finalize_invoice_tx","","Networked version of Foreign::finalize_invoice_tx.",11,[[["versionedslate",4]],[["errorkind",4],["versionedslate",4],["result",4]]]],[10,"receive_swap_message","","Networked version of Foreign::receive_swap_message.",11,[[["string",3]],[["result",4],["errorkind",4]]]],[8,"OwnerRpc","","Public definition used to generate Owner jsonrpc api. *…",null,null],[10,"accounts","","Networked version of Owner::accounts.",12,[[],[["vec",3],["result",4],["errorkind",4]]]],[10,"create_account_path","","Networked version of Owner::create_account_path.",12,[[["string",3]],[["result",4],["errorkind",4],["identifier",3]]]],[10,"set_active_account","","Networked version of Owner::set_active_account.",12,[[["string",3]],[["result",4],["errorkind",4]]]],[10,"retrieve_outputs","","Networked version of Owner::retrieve_outputs.",12,[[["option",4]],[["result",4],["errorkind",4]]]],[10,"retrieve_txs","","Networked version of Owner::retrieve_txs.",12,[[["option",4],["option",4],["uuid",3]],[["result",4],["errorkind",4]]]],[10,"retrieve_summary_info","","Networked version of Owner::retrieve_summary_info.",12,[[],[["errorkind",4],["result",4]]]],[10,"init_send_tx","","Networked version of Owner::init_send_tx.",12,[[["inittxargs",3]],[["errorkind",4],["versionedslate",4],["result",4]]]],[10,"issue_invoice_tx","","Networked version of Owner::issue_invoice_tx.",12,[[["issueinvoicetxargs",3]],[["errorkind",4],["versionedslate",4],["result",4]]]],[10,"process_invoice_tx","","Networked version of Owner::process_invoice_tx.",12,[[["inittxargs",3],["versionedslate",4]],[["errorkind",4],["versionedslate",4],["result",4]]]],[10,"tx_lock_outputs","","Networked version of Owner::tx_lock_outputs.",12,[[["versionedslate",4]],[["result",4],["errorkind",4]]]],[10,"finalize_tx","","Networked version of Owner::finalize_tx.",12,[[["versionedslate",4]],[["errorkind",4],["versionedslate",4],["result",4]]]],[10,"post_tx","","Networked version of Owner::post_tx.",12,[[["transactionv3",3]],[["result",4],["errorkind",4]]]],[10,"cancel_tx","","Networked version of Owner::cancel_tx.",12,[[["option",4],["option",4],["uuid",3]],[["result",4],["errorkind",4]]]],[10,"get_stored_tx","","Networked version of Owner::get_stored_tx.",12,[[["txlogentryapi",3]],[["option",4],["result",4],["errorkind",4]]]],[10,"verify_slate_messages","","Networked version of Owner::verify_slate_messages.",12,[[["versionedslate",4]],[["result",4],["errorkind",4]]]],[10,"scan","","Networked version of Owner::scan.",12,[[["option",4]],[["result",4],["errorkind",4]]]],[10,"node_height","","Networked version of Owner::node_height.",12,[[],[["errorkind",4],["nodeheightresult",3],["result",4]]]],[8,"OwnerRpcS","","Public definition used to generate Owner jsonrpc api.…",null,null],[10,"accounts","","Networked version of Owner::accounts.",13,[[["token",3]],[["vec",3],["result",4],["errorkind",4]]]],[10,"create_account_path","","Networked version of Owner::create_account_path.",13,[[["string",3],["token",3]],[["result",4],["errorkind",4],["identifier",3]]]],[10,"set_active_account","","Networked version of Owner::set_active_account.",13,[[["string",3],["token",3]],[["result",4],["errorkind",4]]]],[10,"retrieve_outputs","","Networked version of Owner::retrieve_outputs.",13,[[["option",4],["token",3]],[["result",4],["errorkind",4]]]],[10,"retrieve_txs","","Networked version of Owner::retrieve_txs.",13,[[["option",4],["option",4],["token",3],["uuid",3]],[["result",4],["errorkind",4]]]],[10,"retrieve_summary_info","","Networked version of Owner::retrieve_summary_info.",13,[[["token",3]],[["errorkind",4],["result",4]]]],[10,"init_send_tx","","Networked version of Owner::init_send_tx. ` # // Full data…",13,[[["inittxargs",3],["token",3]],[["errorkind",4],["versionedslate",4],["result",4]]]],[10,"issue_invoice_tx","","Networked version of Owner::issue_invoice_tx.",13,[[["issueinvoicetxargs",3],["token",3]],[["errorkind",4],["versionedslate",4],["result",4]]]],[10,"process_invoice_tx","","Networked version of Owner::process_invoice_tx.",13,[[["inittxargs",3],["versionedslate",4],["token",3]],[["errorkind",4],["versionedslate",4],["result",4]]]],[10,"tx_lock_outputs","","Networked version of Owner::tx_lock_outputs.",13,[[["versionedslate",4],["token",3]],[["result",4],["errorkind",4]]]],[10,"finalize_tx","","Networked version of Owner::finalize_tx.",13,[[["versionedslate",4],["token",3]],[["errorkind",4],["versionedslate",4],["result",4]]]],[10,"post_tx","","Networked version of Owner::post_tx.",13,[[["transactionv3",3],["token",3]],[["result",4],["errorkind",4]]]],[10,"cancel_tx","","Networked version of Owner::cancel_tx.",13,[[["option",4],["option",4],["token",3],["uuid",3]],[["result",4],["errorkind",4]]]],[10,"get_stored_tx","","Networked version of Owner::get_stored_tx.",13,[[["txlogentryapi",3],["token",3]],[["option",4],["result",4],["errorkind",4]]]],[10,"verify_slate_messages","","Networked version of Owner::verify_slate_messages.",13,[[["versionedslate",4],["token",3]],[["result",4],["errorkind",4]]]],[10,"scan","","Networked version of Owner::scan.",13,[[["option",4],["token",3]],[["result",4],["errorkind",4]]]],[10,"node_height","","Networked version of Owner::node_height.",13,[[["token",3]],[["errorkind",4],["nodeheightresult",3],["result",4]]]],[10,"init_secure_api","","Initializes the secure JSON-RPC API. This function must be…",13,[[["ecdhpubkey",3]],[["result",4],["ecdhpubkey",3],["errorkind",4]]]],[10,"get_top_level_directory","","Networked version of Owner::get_top_level_directory.",13,[[],[["string",3],["result",4],["errorkind",4]]]],[10,"set_top_level_directory","","Networked version of Owner::set_top_level_directory. `#…",13,[[["string",3]],[["result",4],["errorkind",4]]]],[10,"create_config","","Networked version of Owner::create_config.",13,[[["option",4],["walletconfig",3],["option",4],["loggingconfig",3],["option",4],["torconfig",3],["option",4],["chaintypes",4],["mqsconfig",3]],[["result",4],["errorkind",4]]]],[10,"create_wallet","","Networked version of Owner::create_wallet. `#…",13,[[["string",3],["option",4]],[["result",4],["errorkind",4]]]],[10,"open_wallet","","Networked version of Owner::open_wallet. `#…",13,[[["string",3],["option",4]],[["errorkind",4],["result",4],["token",3]]]],[10,"close_wallet","","Networked version of Owner::close_wallet. `#…",13,[[["string",3],["option",4]],[["result",4],["errorkind",4]]]],[10,"get_mnemonic","","Networked version of Owner::get_mnemonic. `#…",13,[[["string",3],["option",4]],[["string",3],["result",4],["errorkind",4]]]],[10,"change_password","","Networked version of Owner::change_password. `#…",13,[[["string",3],["option",4]],[["result",4],["errorkind",4]]]],[10,"delete_wallet","","Networked version of Owner::delete_wallet. `#…",13,[[["string",3],["option",4]],[["result",4],["errorkind",4]]]],[10,"start_updater","","Networked version of Owner::start_updated. `#…",13,[[["token",3]],[["result",4],["errorkind",4]]]],[10,"stop_updater","","Networked version of Owner::stop_updater. `#…",13,[[],[["result",4],["errorkind",4]]]],[10,"get_updater_messages","","Networked version of Owner::get_updater_messages. `#…",13,[[],[["errorkind",4],["result",4],["vec",3]]]],[10,"get_public_proof_address","","Networked version of Owner::get_public_proof_address. `#…",13,[[["token",3]],[["result",4],["provableaddress",3],["errorkind",4]]]],[10,"proof_address_from_onion_v3","","Networked version of Owner::proof_address_from_onion_v3.…",13,[[["string",3]],[["errorkind",4],["result",4],["pubaddress",3]]]],[10,"retrieve_payment_proof","","Networked version of Owner::retrieve_payment_proof. ``` #…",13,[[["option",4],["option",4],["token",3],["uuid",3]],[["result",4],["errorkind",4],["paymentproof",3]]]],[10,"verify_payment_proof","","Networked version of Owner::verify_payment_proof. ``` #…",13,[[["paymentproof",3],["token",3]],[["result",4],["errorkind",4]]]],[10,"set_tor_config","","Networked version of Owner::set_tor_config. `#…",13,[[["option",4],["torconfig",3]],[["result",4],["errorkind",4]]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"borrow_replacement","","",0,[[]]],[11,"vzip","","",0,[[]]],[11,"init","","",0,[[]]],[11,"deref","","",0,[[]]],[11,"deref_mut","","",0,[[]]],[11,"drop","","",0,[[]]],[11,"try_into","","",0,[[],["result",4]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"borrow_replacement","","",1,[[]]],[11,"vzip","","",1,[[]]],[11,"init","","",1,[[]]],[11,"deref","","",1,[[]]],[11,"deref_mut","","",1,[[]]],[11,"drop","","",1,[[]]],[11,"try_into","","",1,[[],["result",4]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"clone_any","","",2,[[],[["box",3],["cloneany",8]]]],[11,"clone_any_send","","",2,[[],[["cloneany",8],["box",3]]]],[11,"clone_any_sync","","",2,[[],[["box",3],["cloneany",8]]]],[11,"clone_any_send_sync","","",2,[[],[["box",3],["cloneany",8]]]],[11,"borrow_replacement","","",2,[[]]],[11,"clone_boxed","","",2,[[],[["box",3],["defaultfeatures",8]]]],[11,"self_address_mut","","",2,[[]]],[11,"clone_boxed","","",2,[[],[["box",3],["nonsyncfeatures",8]]]],[11,"self_address_mut","","",2,[[]]],[11,"vzip","","",2,[[]]],[11,"init","","",2,[[]]],[11,"deref","","",2,[[]]],[11,"deref_mut","","",2,[[]]],[11,"drop","","",2,[[]]],[11,"try_into","","",2,[[],["result",4]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"clone_any","","",3,[[],[["box",3],["cloneany",8]]]],[11,"clone_any_send","","",3,[[],[["cloneany",8],["box",3]]]],[11,"clone_any_sync","","",3,[[],[["box",3],["cloneany",8]]]],[11,"clone_any_send_sync","","",3,[[],[["box",3],["cloneany",8]]]],[11,"borrow_replacement","","",3,[[]]],[11,"clone_boxed","","",3,[[],[["box",3],["defaultfeatures",8]]]],[11,"self_address_mut","","",3,[[]]],[11,"clone_boxed","","",3,[[],[["box",3],["nonsyncfeatures",8]]]],[11,"self_address_mut","","",3,[[]]],[11,"vzip","","",3,[[]]],[11,"init","","",3,[[]]],[11,"deref","","",3,[[]]],[11,"deref_mut","","",3,[[]]],[11,"drop","","",3,[[]]],[11,"try_into","","",3,[[],["result",4]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"clone_any","","",4,[[],[["box",3],["cloneany",8]]]],[11,"clone_any_send","","",4,[[],[["cloneany",8],["box",3]]]],[11,"clone_any_sync","","",4,[[],[["box",3],["cloneany",8]]]],[11,"clone_any_send_sync","","",4,[[],[["box",3],["cloneany",8]]]],[11,"borrow_replacement","","",4,[[]]],[11,"clone_boxed","","",4,[[],[["box",3],["defaultfeatures",8]]]],[11,"self_address_mut","","",4,[[]]],[11,"clone_boxed","","",4,[[],[["box",3],["nonsyncfeatures",8]]]],[11,"self_address_mut","","",4,[[]]],[11,"vzip","","",4,[[]]],[11,"init","","",4,[[]]],[11,"deref","","",4,[[]]],[11,"deref_mut","","",4,[[]]],[11,"drop","","",4,[[]]],[11,"try_into","","",4,[[],["result",4]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"clone_any","","",5,[[],[["box",3],["cloneany",8]]]],[11,"clone_any_send","","",5,[[],[["cloneany",8],["box",3]]]],[11,"clone_any_sync","","",5,[[],[["box",3],["cloneany",8]]]],[11,"clone_any_send_sync","","",5,[[],[["box",3],["cloneany",8]]]],[11,"borrow_replacement","","",5,[[]]],[11,"clone_boxed","","",5,[[],[["box",3],["defaultfeatures",8]]]],[11,"self_address_mut","","",5,[[]]],[11,"clone_boxed","","",5,[[],[["box",3],["nonsyncfeatures",8]]]],[11,"self_address_mut","","",5,[[]]],[11,"vzip","","",5,[[]]],[11,"init","","",5,[[]]],[11,"deref","","",5,[[]]],[11,"deref_mut","","",5,[[]]],[11,"drop","","",5,[[]]],[11,"try_into","","",5,[[],["result",4]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"to_owned","","",6,[[]]],[11,"clone_into","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"clone_any","","",6,[[],[["box",3],["cloneany",8]]]],[11,"clone_any_send","","",6,[[],[["cloneany",8],["box",3]]]],[11,"clone_any_sync","","",6,[[],[["box",3],["cloneany",8]]]],[11,"clone_any_send_sync","","",6,[[],[["box",3],["cloneany",8]]]],[11,"borrow_replacement","","",6,[[]]],[11,"clone_boxed","","",6,[[],[["box",3],["defaultfeatures",8]]]],[11,"self_address_mut","","",6,[[]]],[11,"clone_boxed","","",6,[[],[["box",3],["nonsyncfeatures",8]]]],[11,"self_address_mut","","",6,[[]]],[11,"vzip","","",6,[[]]],[11,"init","","",6,[[]]],[11,"deref","","",6,[[]]],[11,"deref_mut","","",6,[[]]],[11,"drop","","",6,[[]]],[11,"try_into","","",6,[[],["result",4]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_owned","","",7,[[]]],[11,"clone_into","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"clone_any","","",7,[[],[["box",3],["cloneany",8]]]],[11,"clone_any_send","","",7,[[],[["cloneany",8],["box",3]]]],[11,"clone_any_sync","","",7,[[],[["box",3],["cloneany",8]]]],[11,"clone_any_send_sync","","",7,[[],[["box",3],["cloneany",8]]]],[11,"borrow_replacement","","",7,[[]]],[11,"clone_boxed","","",7,[[],[["box",3],["defaultfeatures",8]]]],[11,"self_address_mut","","",7,[[]]],[11,"clone_boxed","","",7,[[],[["box",3],["nonsyncfeatures",8]]]],[11,"self_address_mut","","",7,[[]]],[11,"vzip","","",7,[[]]],[11,"init","","",7,[[]]],[11,"deref","","",7,[[]]],[11,"deref_mut","","",7,[[]]],[11,"drop","","",7,[[]]],[11,"try_into","","",7,[[],["result",4]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"borrow_replacement","","",8,[[]]],[11,"vzip","","",8,[[]]],[11,"init","","",8,[[]]],[11,"deref","","",8,[[]]],[11,"deref_mut","","",8,[[]]],[11,"drop","","",8,[[]]],[11,"try_into","","",8,[[],["result",4]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"borrow_replacement","","",10,[[]]],[11,"vzip","","",10,[[]]],[11,"init","","",10,[[]]],[11,"deref","","",10,[[]]],[11,"deref_mut","","",10,[[]]],[11,"drop","","",10,[[]]],[11,"try_into","","",10,[[],["result",4]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"to_owned","","",9,[[]]],[11,"clone_into","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"clone_any","","",9,[[],[["box",3],["cloneany",8]]]],[11,"clone_any_send","","",9,[[],[["cloneany",8],["box",3]]]],[11,"clone_any_sync","","",9,[[],[["box",3],["cloneany",8]]]],[11,"clone_any_send_sync","","",9,[[],[["box",3],["cloneany",8]]]],[11,"borrow_replacement","","",9,[[]]],[11,"clone_boxed","","",9,[[],[["box",3],["defaultfeatures",8]]]],[11,"self_address_mut","","",9,[[]]],[11,"clone_boxed","","",9,[[],[["box",3],["nonsyncfeatures",8]]]],[11,"self_address_mut","","",9,[[]]],[11,"vzip","","",9,[[]]],[11,"init","","",9,[[]]],[11,"deref","","",9,[[]]],[11,"deref_mut","","",9,[[]]],[11,"drop","","",9,[[]]],[11,"try_into","","",9,[[],["result",4]]],[11,"check_version","","",0,[[],[["result",4],["versioninfo",3],["errorkind",4]]]],[11,"get_proof_address","","",0,[[],[["string",3],["result",4],["errorkind",4]]]],[11,"build_coinbase","","",0,[[["blockfees",3]],[["errorkind",4],["versionedcoinbase",4],["result",4]]]],[11,"verify_slate_messages","","",0,[[["versionedslate",4]],[["result",4],["errorkind",4]]]],[11,"receive_tx","","",0,[[["string",3],["versionedslate",4],["option",4]],[["errorkind",4],["versionedslate",4],["result",4]]]],[11,"finalize_invoice_tx","","",0,[[["versionedslate",4]],[["errorkind",4],["versionedslate",4],["result",4]]]],[11,"receive_swap_message","","",0,[[["string",3]],[["result",4],["errorkind",4]]]],[11,"accounts","","",1,[[],[["vec",3],["result",4],["errorkind",4]]]],[11,"create_account_path","","",1,[[["string",3]],[["result",4],["errorkind",4],["identifier",3]]]],[11,"set_active_account","","",1,[[["string",3]],[["result",4],["errorkind",4]]]],[11,"retrieve_outputs","","",1,[[["option",4]],[["result",4],["errorkind",4]]]],[11,"retrieve_txs","","",1,[[["option",4],["option",4],["uuid",3]],[["result",4],["errorkind",4]]]],[11,"retrieve_summary_info","","",1,[[],[["errorkind",4],["result",4]]]],[11,"init_send_tx","","",1,[[["inittxargs",3]],[["errorkind",4],["versionedslate",4],["result",4]]]],[11,"issue_invoice_tx","","",1,[[["issueinvoicetxargs",3]],[["errorkind",4],["versionedslate",4],["result",4]]]],[11,"process_invoice_tx","","",1,[[["inittxargs",3],["versionedslate",4]],[["errorkind",4],["versionedslate",4],["result",4]]]],[11,"finalize_tx","","",1,[[["versionedslate",4]],[["errorkind",4],["versionedslate",4],["result",4]]]],[11,"tx_lock_outputs","","",1,[[["versionedslate",4]],[["result",4],["errorkind",4]]]],[11,"cancel_tx","","",1,[[["option",4],["option",4],["uuid",3]],[["result",4],["errorkind",4]]]],[11,"get_stored_tx","","",1,[[["txlogentryapi",3]],[["option",4],["result",4],["errorkind",4]]]],[11,"post_tx","","",1,[[["transactionv3",3]],[["result",4],["errorkind",4]]]],[11,"verify_slate_messages","","",1,[[["versionedslate",4]],[["result",4],["errorkind",4]]]],[11,"scan","","",1,[[["option",4]],[["result",4],["errorkind",4]]]],[11,"node_height","","",1,[[],[["errorkind",4],["nodeheightresult",3],["result",4]]]],[11,"accounts","","",1,[[["token",3]],[["vec",3],["result",4],["errorkind",4]]]],[11,"create_account_path","","",1,[[["string",3],["token",3]],[["result",4],["errorkind",4],["identifier",3]]]],[11,"set_active_account","","",1,[[["string",3],["token",3]],[["result",4],["errorkind",4]]]],[11,"retrieve_outputs","","",1,[[["option",4],["token",3]],[["result",4],["errorkind",4]]]],[11,"retrieve_txs","","",1,[[["option",4],["option",4],["token",3],["uuid",3]],[["result",4],["errorkind",4]]]],[11,"retrieve_summary_info","","",1,[[["token",3]],[["errorkind",4],["result",4]]]],[11,"init_send_tx","","",1,[[["inittxargs",3],["token",3]],[["errorkind",4],["versionedslate",4],["result",4]]]],[11,"issue_invoice_tx","","",1,[[["issueinvoicetxargs",3],["token",3]],[["errorkind",4],["versionedslate",4],["result",4]]]],[11,"process_invoice_tx","","",1,[[["inittxargs",3],["versionedslate",4],["token",3]],[["errorkind",4],["versionedslate",4],["result",4]]]],[11,"finalize_tx","","",1,[[["versionedslate",4],["token",3]],[["errorkind",4],["versionedslate",4],["result",4]]]],[11,"tx_lock_outputs","","",1,[[["versionedslate",4],["token",3]],[["result",4],["errorkind",4]]]],[11,"cancel_tx","","",1,[[["option",4],["option",4],["token",3],["uuid",3]],[["result",4],["errorkind",4]]]],[11,"get_stored_tx","","",1,[[["txlogentryapi",3],["token",3]],[["option",4],["result",4],["errorkind",4]]]],[11,"post_tx","","",1,[[["transactionv3",3],["token",3]],[["result",4],["errorkind",4]]]],[11,"verify_slate_messages","","",1,[[["versionedslate",4],["token",3]],[["result",4],["errorkind",4]]]],[11,"scan","","",1,[[["option",4],["token",3]],[["result",4],["errorkind",4]]]],[11,"node_height","","",1,[[["token",3]],[["errorkind",4],["nodeheightresult",3],["result",4]]]],[11,"init_secure_api","","",1,[[["ecdhpubkey",3]],[["result",4],["ecdhpubkey",3],["errorkind",4]]]],[11,"get_top_level_directory","","",1,[[],[["string",3],["result",4],["errorkind",4]]]],[11,"set_top_level_directory","","",1,[[["string",3]],[["result",4],["errorkind",4]]]],[11,"create_config","","",1,[[["option",4],["walletconfig",3],["option",4],["loggingconfig",3],["option",4],["torconfig",3],["option",4],["chaintypes",4],["mqsconfig",3]],[["result",4],["errorkind",4]]]],[11,"create_wallet","","",1,[[["string",3],["option",4]],[["result",4],["errorkind",4]]]],[11,"open_wallet","","",1,[[["string",3],["option",4]],[["errorkind",4],["result",4],["token",3]]]],[11,"close_wallet","","",1,[[["string",3],["option",4]],[["result",4],["errorkind",4]]]],[11,"get_mnemonic","","",1,[[["string",3],["option",4]],[["string",3],["result",4],["errorkind",4]]]],[11,"change_password","","",1,[[["string",3],["option",4]],[["result",4],["errorkind",4]]]],[11,"delete_wallet","","",1,[[["string",3],["option",4]],[["result",4],["errorkind",4]]]],[11,"start_updater","","",1,[[["token",3]],[["result",4],["errorkind",4]]]],[11,"stop_updater","","",1,[[],[["result",4],["errorkind",4]]]],[11,"get_updater_messages","","",1,[[],[["errorkind",4],["result",4],["vec",3]]]],[11,"get_public_proof_address","","",1,[[["token",3]],[["result",4],["provableaddress",3],["errorkind",4]]]],[11,"retrieve_payment_proof","","",1,[[["option",4],["option",4],["token",3],["uuid",3]],[["result",4],["errorkind",4],["paymentproof",3]]]],[11,"verify_payment_proof","","",1,[[["paymentproof",3],["token",3]],[["result",4],["errorkind",4]]]],[11,"proof_address_from_onion_v3","","",1,[[["string",3]],[["errorkind",4],["result",4],["pubaddress",3]]]],[11,"set_tor_config","","",1,[[["option",4],["torconfig",3]],[["result",4],["errorkind",4]]]],[11,"drop","","We have a start_updater_log_thread running in the…",1,[[]]],[11,"clone","","",9,[[],["jsonid",4]]],[11,"clone","","",7,[[],["token",3]]],[11,"clone","","",6,[[],["pubaddress",3]]],[11,"clone","","",2,[[],["ecdhpubkey",3]]],[11,"clone","","",3,[[],["encryptedrequest",3]]],[11,"clone","","",4,[[],["encryptedresponse",3]]],[11,"clone","","",5,[[],["encryptionerrorresponse",3]]],[11,"eq","","",9,[[["jsonid",4]]]],[11,"ne","","",9,[[["jsonid",4]]]],[11,"fmt","","",9,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",6,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"serialize","","",9,[[],["result",4]]],[11,"serialize","","",7,[[],["result",4]]],[11,"serialize","","",6,[[],["result",4]]],[11,"serialize","","",2,[[],["result",4]]],[11,"serialize","","",3,[[],["result",4]]],[11,"serialize","","",4,[[],["result",4]]],[11,"serialize","","",5,[[],["result",4]]],[11,"deserialize","","",9,[[],["result",4]]],[11,"deserialize","","",7,[[],["result",4]]],[11,"deserialize","","",6,[[],["result",4]]],[11,"deserialize","","",2,[[],["result",4]]],[11,"deserialize","","",3,[[],["result",4]]],[11,"deserialize","","",4,[[],["result",4]]],[11,"deserialize","","",5,[[],["result",4]]],[11,"handle","","",11,[[["params",4]],[["value",4],["result",4],["error",3]]]],[11,"handle","","",12,[[["params",4]],[["value",4],["result",4],["error",3]]]],[11,"handle","","",13,[[["params",4]],[["value",4],["result",4],["error",3]]]]],"p":[[3,"Foreign"],[3,"Owner"],[3,"ECDHPubkey"],[3,"EncryptedRequest"],[3,"EncryptedResponse"],[3,"EncryptionErrorResponse"],[3,"PubAddress"],[3,"Token"],[4,"ForeignCheckMiddlewareFn"],[4,"JsonId"],[4,"foreign_rpc_client"],[8,"ForeignRpc"],[8,"OwnerRpc"],[8,"OwnerRpcS"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);