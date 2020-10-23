export default [
  // 0
  {
    state: 'ENABLE_DNSSEC',
    title: 'Problem fetching data from DNS',
    displayError: true
  },
  // 1
  {
    state: 'ENABLE_DNSSEC',
    title: 'DNS entry does not exist.',
    displayError: true
  },
  // 2
  {
    state: 'ENABLE_DNSSEC',
    title: 'Please enable DNSSEC'
  },
  // 3
  {
    state: 'ADD_TEXT',
    title: 'Please add text record into _ens.name.tld'
  },
  // 4,
  {
    state: 'ADD_TEXT',
    title: 'DNS Record is invalid',
    displayError: true
  },
  // 5,
  {
    state: 'SUBMIT_PROOF',
    title: 'Ready to register',
    explainer:
      "*Click 'refresh' if you make changes to the domain in the DNS Registrar."
  },
  // 6,
  {
    state: 'SUBMIT_PROOF',
    title: 'DNS is out of sync',
    explainer:
      "The Controller and DNS Owner are out of sync. Click 'sync' to make the DNS Owner the Controller. Click 'refresh' if you make changes to the domain in the DNS Registrar.",
    outOfSync: true
  },
  // 7,
  {
    state: 'SUBMIT_PROOF',
    title: 'Registry is out of date',
    explainer:
      "Click 'sync' to make the DNS Owner the Controller. Click 'refresh' if you make changes to the domain in the DNS Registrar.",
    outOfSync: true
  },
  // 8,
  {
    state: 'SUBMIT_PROOF',
    title: 'There is no owner record on DNS',
    explainer:
      'There is no owner set under _ens subdomain. You can add an owner hex address in the DNS Registrar and click refresh. Or you can delete the controller',
    outOfSync: true,
    deleteProof: true,
    deleteDomain: true
  },
  // 9,
  {
    state: 'SUBMIT_PROOF',
    title: 'Ready to delete the domain',
    explainer:
      'The proof iYou can add an owner hex address in the DNS Registrar and click refresh. Or you can delete the controller',
    outOfSync: true,
    deleteProof: false,
    deleteDomain: true
  }
]
