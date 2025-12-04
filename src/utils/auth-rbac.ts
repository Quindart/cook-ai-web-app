export type User = { roles: Role[]; id: string }

type Role = keyof typeof ROLES
type Permission = (typeof ROLES)[Role][number]

const ROLES = {
  admin: [
    'view:comments',
    'create:comments',
    'update:comments',
    'delete:comments',
  ],
  moderator: ['view:comments', 'create:comments', 'delete:comments'],
  user: ['view:comments', 'create:comments'],
}

export default function hasPermission(user: User, permission: Permission) {
  return user.roles.some((role) =>
    (ROLES[role] as readonly Permission[]).includes(permission),
  )
}

const user: User = { id: '1', roles: ['user'] }

//example:
hasPermission(user, 'create:comments')
hasPermission(user, 'view:comments')
