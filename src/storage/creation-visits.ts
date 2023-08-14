import { MMKV } from 'react-native-mmkv';

export class CreationVisitsStorage {
  private storageKey = 'CREATION_VISITS';
  private storage: MMKV;

  constructor() {
    this.storage = new MMKV();
  }

  get creationVisits() {
    try {
      const jsonCreationVisits = this.storage.getString(this.storageKey);
      return JSON.parse(jsonCreationVisits || '{}');
    } catch (error) {
      return {};
    }
  }

  increaseVisitCount(id: number): number {
    const value = this.creationVisits[id] ? this.creationVisits[id] + 1 : 1;
    const data = JSON.stringify({ ...this.creationVisits, [id]: value });

    this.storage.set(this.storageKey, data);

    return value;
  }
}
