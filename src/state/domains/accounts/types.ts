export interface Account {
    name: string,
    keypairs: {
      active: Key,
      owner: Key,
      [key: string]: Key
    }
}

interface Key {
    raw_key: string,
    key_type: string,
    public_key: string
  }
