import { Count } from '../Count'
import Nav from 'components/Nav'

describe('Count Component', () => {
  let wrapper, total, increase, decrease
  beforeEach(() => {
    total = 1
    increase = jest.fn()
    decrease = jest.fn()
    const props = { total, increase, decrease }
    wrapper = shallow(<Count {...props} />)
  })

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should render the Nav Component', () => {
    expect(wrapper.find(Nav)).toBeTruthy()
  })

  it('should invoke increase when click in the button', () => {
    const increaseButton = wrapper.find('#increase')
    increaseButton.simulate('click')
    expect(increase).toHaveBeenCalled()
  })

  it('should invoke decrease when click in the button', () => {
    const decreaseButton = wrapper.find('#decrease')
    decreaseButton.simulate('click')
    expect(decrease).toHaveBeenCalled()
  })
})
