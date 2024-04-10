import {
  makeFullCurrencyList,
  parseAmountAndCurrencies,
  getCurrencyCodes,
  getServiceName,
  getCurrencyList,
  getExchangeRate
} from './converter'
import mockApiResponseAll from './json-data/mock-api-response-all.json'
import mockApiResponseDkk from './json-data/mock-api-response-dkk.json'
import mockApiResponsePln from './json-data/mock-api-response-pln.json'

describe('makeFullCurrencyList', () => {
  it('should return an empty array', () => {
    expect(makeFullCurrencyList([], {})).toEqual([])
  })

  it('should return an array of three elements', () => {
    const list1 = {
      'USD': 'United States Dollar',
      'EUR': 'Euro',
    }
    const list2 = {
      'USD': 'US Dollar',
      'GBP': 'British Pound'
    }
    const expected = [ 'USD', 'EUR', 'GBP' ]
    expect(makeFullCurrencyList([list1, list2], {})).toEqual(expected)
  })

  it('should return an array of five elements', () => {
    const list1 = {
      'USD': 'United States Dollar',
      'EUR': 'Euro',
      'GBP': 'British Pound'
    }
    const list2 = {
      'UAH': 'Ukrainian Hryvnia',
      'RUB': 'Russian Ruble'
    }
    const expected = [ 'USD', 'EUR', 'GBP', 'UAH', 'RUB']
    expect(makeFullCurrencyList([list1, list2], {})).toEqual(expected)
  })

  it('should return an array of six elements', () => {
    const list1 = {
      'USD': 'United States Dollar',
    }
    const list2 = {
      'RUB': 'Russian Ruble'
    }
    const synonyms = {
      'UAH': ['гривня', 'грн'],
      'RUB': ['рублей', 'руб'],
      'USD': ['баксов', 'долларов']
    }
    const expected = [ 'USD', 'баксов', 'долларов', 'RUB', 'рублей', 'руб']
    expect(makeFullCurrencyList([list1, list2], synonyms)).toEqual(expected)
  })

  it('should return an array of nine elements', () => {
    const list1 = {
      'USD': 'United States Dollar',
      'EUR': 'Euro',
      'GBP': 'British Pound'
    }
    const list2 = {
      'UAH': 'Ukrainian Hryvnia',
      'RUB': 'Russian Ruble'
    }
    const synonyms = {
      'UAH': ['гривня', 'грн'],
      'USD': ['баксов', 'долларов']
    }
    const expected = [ 'USD', 'баксов', 'долларов', 'EUR', 'GBP', 'UAH', 'гривня', 'грн', 'RUB']
    expect(makeFullCurrencyList([list1, list2], synonyms)).toEqual(expected)
  })
})

describe('parseAmountAndCurrencies', () => {
  it('should return an object with zero amount and empty currencies array', () => {
    expect(parseAmountAndCurrencies('', [])).toEqual({ amount: 0, currencies: [] })
    expect(parseAmountAndCurrencies('', [ 'UAH', 'USD' ])).toEqual({ amount: 0, currencies: [] })
    expect(parseAmountAndCurrencies('hello world!', [])).toEqual({ amount: 0, currencies: [] })
  })

  it('should return an object with amount and pair of currencies', () => {
    const input = 'Переведи 10 долларов в гривны'
    const currencies = [ 'USD', 'долларов', 'UAH', 'гривны' ]
    const expected = { amount: 10, currencies: [ 'долларов', 'гривны' ] }
    expect(parseAmountAndCurrencies(input, currencies)).toEqual(expected)
  })

  it('should return an object with amount and couple of currencies', () => {
    const input = 'Переведи 50 долларов в гривны, кроны, евро.'
    const currencies = [ 'USD', 'долларов', 'UAH', 'гривны', 'NOK', 'кроны', 'EUR', 'евро' ]
    const expected = { amount: 50, currencies: [ 'долларов', 'гривны', 'кроны', 'евро' ] }
    expect(parseAmountAndCurrencies(input, currencies)).toEqual(expected)
  })

  it('should return correct object for input with the question', () => {
    const input = 'Можешь перевести 9 крон в евро?'
    const currencies = [ 'NOK', 'крон', 'EUR', 'евро' ]
    const expected = { amount: 9, currencies: [ 'крон', 'евро' ] }
    expect(parseAmountAndCurrencies(input, currencies)).toEqual(expected)
  })

  it('should return correct object for input with the attention', () => {
    const input = 'Переведи 500 баксов в злотые!'
    const currencies = [ 'USD', 'баксов', 'PLH', 'злотые' ]
    const expected = { amount: 500, currencies: [ 'баксов', 'злотые' ] }
    expect(parseAmountAndCurrencies(input, currencies)).toEqual(expected)
  })

  it('should return correct amount for float', () => {
    const input = 'Переведи 7.5 баксов в злотые!'
    const currencies = [ 'USD', 'баксов', 'PLH', 'злотые' ]
    const expected = { amount: 7.5, currencies: [ 'баксов', 'злотые' ] }
    expect(parseAmountAndCurrencies(input, currencies)).toEqual(expected)
  })

  it('should return correct amount without space', () => {
    const input = 'Переведи 10kr в злотые!'
    const currencies = [ 'NOK', 'kr', 'PLH', 'злотые' ]
    const expected = { amount: 10, currencies: [ 'kr', 'злотые' ] }
    expect(parseAmountAndCurrencies(input, currencies)).toEqual(expected)
  })

  it('should return correct data for lowercase', () => {
    const input = '10 nok uah!'
    const currencies = [ 'NOK', 'UAH' ]
    const expected = { amount: 10, currencies: [ 'nok', 'uah' ] }
    expect(parseAmountAndCurrencies(input, currencies)).toEqual(expected)
  })

  it('should return correct amount for float and partially uppercase', () => {
    const input = 'Переведи 7.5 баксОв в злоТые!'
    const currencies = [ 'USD', 'баксов', 'PLH', 'злотые' ]
    const expected = { amount: 7.5, currencies: [ 'баксОв', 'злоТые' ] }
    expect(parseAmountAndCurrencies(input, currencies)).toEqual(expected)
  })

  it('should return correct amount without space and uppercase', () => {
    const input = 'Переведи 10KR в ЗЛОТЫЕ!'
    const currencies = [ 'NOK', 'kr', 'PLH', 'злотые' ]
    const expected = { amount: 10, currencies: [ 'KR', 'ЗЛОТЫЕ' ] }
    expect(parseAmountAndCurrencies(input, currencies)).toEqual(expected)
  })
})

describe('getCurrencyCodes',() => {
  it('should return an empty array', () => {
    expect(getCurrencyCodes([])).toEqual([])
  })

  it('should return an empty array for error values', () => {
    expect(getCurrencyCodes([ "hello", "world" ])).toEqual([])
  })

  it('should return correct array', () => {
    expect(getCurrencyCodes(["NOK", "USD"])).toEqual(["NOK", "USD"])
  })

  it('should return correct array for lowercase', () => {
    expect(getCurrencyCodes(["nok", "usd", "uah"])).toEqual(["NOK", "USD", "UAH"])
  })

  it('should return correct array for partially lowercase', () => {
    expect(getCurrencyCodes(["noK", "uSd", "Uah", "RUb"])).toEqual(["NOK", "USD", "UAH", "RUB"])
  })

  it('should return correct array for synonyms', () => {
    expect(getCurrencyCodes(["крон", "рублей", "баксов", "euro", "битков"])).toEqual(["NOK", "RUB", "USD", "EUR", "BTC" ])
  })
})

describe('getServiceName', () => {
  it('should return null', () => {
    expect(getServiceName([])).toBeNull()
  })

  it('should return null for feil currencies', () => {
    expect(getServiceName(["hello", "world"])).toBeNull()
  })

  it('should return "Norges Bank"', () => {
    expect(getServiceName(["PLN", "USD", "NOK", "USD"])).toEqual("Norges Bank")
  })

  it('should return "Open Exchange Rates"', () => {
    expect(getServiceName(["NOK", "UAH", "BTC"])).toEqual("Open Exchange Rates")
  })
})

describe('getCurrencyList', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ ...mockApiResponseAll }),
      }) as Promise<Response>
    )
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should return correct object', async () => {
    const list = await getCurrencyList()
    for (const key in list) {
      expect(typeof key).toEqual("string")
      expect(key.length).toEqual(3)
      expect(typeof list[key]).toEqual("string")
    }
  })
})

describe('getExchangeRate', () => {
  describe('DKK', () => {
    beforeEach(() => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve({ ...mockApiResponseDkk }),
        }) as Promise<Response>
      )
    })

    afterEach(() => {
      jest.restoreAllMocks()
    })

    it('should return correct exchange rate', async () => {
      const rate = await getExchangeRate('DKK')
      expect(rate.id).toEqual("DKK")
      expect(rate.name).toEqual("Danish krone")
      expect(typeof rate.rate).toEqual("string")
      expect(rate.exponent).toEqual(2)
      expect(typeof rate.actualRate).toEqual("number")
    })
  })

  describe('PLN', () => {
    beforeEach(() => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve({ ...mockApiResponsePln }),
        }) as Promise<Response>
      )
    })

    afterEach(() => {
      jest.restoreAllMocks()
    })

    it('should return correct exchange rate', async () => {
      const rate = await getExchangeRate('PLN')
      expect(rate.id).toEqual("PLN")
      expect(rate.name).toEqual("Polish zloty")
      expect(typeof rate.rate).toEqual("string")
      expect(rate.exponent).toEqual(0)
      expect(typeof rate.actualRate).toEqual("number")
    })
  })
})
