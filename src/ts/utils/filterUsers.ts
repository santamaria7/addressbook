export function filterUsers(user: User, first?: string, last?: string) {
  const { first: firstName, last: lastName } = user.name;
  if (first && last) {
    if (
      firstName.toLowerCase() === first.toLowerCase() &&
      lastName.toLowerCase() === last.toLowerCase()
    ) {
      return user;
    }
  } else if (first && !last) {
    if (firstName.toLowerCase() === first.toLowerCase()) {
      return user;
    }
  } else if (!first && last) {
    if (lastName.toLowerCase() === last.toLowerCase()) {
      return user;
    }
  }
}
