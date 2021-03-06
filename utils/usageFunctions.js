const usage = function() {
  const usageText = `
  algods helps you manage your local Algorand development environment.

  usage:

    $ algods <command>

  commands:

    startnet:       Uses Algorand's sandbox to create a new private network
    stopnet:        Stops sandbox environment and deletes docker containers
    getaccount:     Retrieves account info
    listaccounts:   Lists existing accounts in your private network
    createaccount:  Creates a new Algorand account in your private network [TODO]
    fundaccount:    Funds an existing Algorand account [TODO]
    createtoken:    Creates a new ASA in your private network [TODO]
    build:          Compiles Approval and Clear program from pyteal code [TODO]
    createapp:      Issues a transaction that creates an application
    appinfo:        Displays App info [TODO]
    callapp:        Issues a transaction that calls an application [WIP]
    help:           Displays this help guide
  `

  console.log(usageText);
}

const createAccountUsage = () => {
  const usageText = `
  usage:

    $ createaccount <options>
  
  options:

    -a <address>    Returns account info for a given address
    -h              Displays this help guide
  `
  console.log(usageText)
}

const createAppUsage = () => {
  const usageText = `
  usage:

    $ createapp <options>
  
  options:

    -creator string    Creator address
    -app string        App directory relative path
    -h                 Displays this help guide
  `
  console.log(usageText)
}

const callAppUsage = () => {
  const usageText = `
  usage:

    $ callapp <options>
  
  options:

    -app int           Application ID
    -f string          Account to call app from
    -args  array       Args to encode for application transactions 
                       (all will be encoded to a byte slice). For ints, use the form 
                       'int:1234'. For raw bytes, use the form 'b64:A=='. For printable 
                       strings, use the form 'str:hello'. For addresses, use the form 
                       'addr:XYZ...'.
    -h                 Displays this help guide
  `
  console.log(usageText)
}

const buildUsage = () => {
  const usageText = `
  usage:

    $ build <options>
  
  options:

    -c <contract_name>  Compiles the TEAL scripts for the given contract 
    -h                  Displays this help guide
  `
  console.log(usageText)
}

const appinfoUsage = () => {
  const usageText = `
  usage:

    $ appinfo <options>
  
  options:

    -a <app_id>  Displays the App with the given id
    -h           Displays this help guide
  `
  console.log(usageText)
}

module.exports = {
  usage,
  createAccountUsage,
  createAppUsage,
  callAppUsage
}