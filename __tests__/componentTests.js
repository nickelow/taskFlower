import React from 'react'
import { shallow, mount } from 'enzyme';
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Home from '../client/components/Home.jsx'
import List from '../client/components/List.jsx'
import Card from '../client/components/Task.jsx'
import TaskButton from '../client/components/TaskButton.jsx';
import DeleteButton from '../client/components/DeleteButton.jsx';
import SaveButton from '../client/components/SaveButton.jsx';
import ButtonBar from '../client/components/ButtonBar.jsx';
import Alert from '../client/components/Alert.jsx';
import FailureAlert from '../client/components/FailureAlert.jsx';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';

describe('<Home />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it('should render', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('<List />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<List />);
  });

  it('should render', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});


describe('<TaskButton/>', () => {
  let wrapper;

  beforeEach(() => {
  	const spy = sinon.spy();
  	const list = shallow(<List/>)
    wrapper = shallow(<TaskButton addCard={spy}/>);
  });

  it('should render', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('<DeleteButton/>', () => {
  let wrapper;
  let  component;
  beforeEach(() => {
  	const spy = sinon.spy();
    wrapper = shallow(<DeleteButton deleteCard={spy}/>);
    component = wrapper.instance()
  });

  it('should render', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});

describe('<SaveButton/>', () => {
  let wrapper;

  beforeEach(() => {
  	const spy = sinon.spy();
    wrapper = shallow(<SaveButton saveCards={spy}/>);
  });

  it('should render', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});

describe('<ButtonBar/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ButtonBar />);
  });

  it('should render', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('<Alert />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Alert />);
  });

  it('should render', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});