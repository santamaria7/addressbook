type Action<T> = {
  type: string;
  payload?: T;
};

type getUsersPayload = {
  page: number;
  seed?: string;
  nat?: string;
};

type findUserPayload = {
  first: string;
  last: string;
};

type User = {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: string | { number: string; name: string };
    city: string;
    state: string;
    postcode: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
};

type SearchState = {
  isFiltered: boolean;
  first?: string;
  last?: string;
};

type State = {
  users: User[];
  loading: boolean;
  search: SearchState;
  pagination: PaginationType;
  nationality: string | undefined;
};
type PaginationType = {
  limit?: number;
  offset?: number;
  seed?: string;
};

type UserReceivedType = {
  results: User[];
  pagination: PaginationType;
};
