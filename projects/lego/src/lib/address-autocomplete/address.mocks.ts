export const MOCK_ADDRESS_COMPONENTS = [
  {
    long_name: 'Anacortes Ferry Terminal',
    short_name: 'Anacortes Ferry Terminal',
    types: ['route'],
  },
  {
    long_name: 'Anacortes',
    short_name: 'Anacortes',
    types: ['locality', 'political'],
  },
  {
    long_name: 'Skagit County',
    short_name: 'Skagit County',
    types: ['administrative_area_level_2', 'political'],
  },
  {
    long_name: 'Washington',
    short_name: 'WA',
    types: ['administrative_area_level_1', 'political'],
  },
  {
    long_name: 'United States',
    short_name: 'US',
    types: ['country', 'political'],
  },
  { long_name: '98221', short_name: '98221', types: ['postal_code'] },
];

export const MOCK_MAPPED_ADDRESS = {
  route: 'Anacortes Ferry Terminal',
  locality: 'Anacortes',
  administrative_area_level_2: 'Skagit County',
  administrative_area_level_1: 'Washington',
  country: 'United States',
  postal_code: '98221',
};

export const MOCK_CLEAR_ADDRESS = `Anacortes Ferry Terminal, 98221 Anacortes, United States`;
