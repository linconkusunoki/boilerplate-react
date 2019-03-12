import Count from './'

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

  it('should render the total from props', () => {
    wrapper.setProps({ total: 2 })
    expect(wrapper.find('h1').props().children[1]).toEqual(2)
  })
})
