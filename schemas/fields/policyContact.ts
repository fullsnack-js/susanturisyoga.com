import { Rule } from 'sanity'

import { getIcon } from '../utils/get-icon'

export const policyContact = {
  icon: getIcon('person'),
  name: 'contact',
  title: 'Policy Contact Information',
  description: 'Required person responsible for managing policy inquiries',
  type: 'reference',
  to: [{ type: 'person' }],
  options: {
    filter: 'role == $role',
    filterParams: { role: 'manager' },
  },
  validation: (rule: Rule) =>
    rule.warning('Must provide a contact person.').required(),
}
