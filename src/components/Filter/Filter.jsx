import { useDispatch } from 'react-redux';
import { Section } from './filter.styled';
import { clearCard } from '../redux/slice';

export const FilterComponent = () => {
  const dispatch = useDispatch();
  return (
    <Section>
      Filter
      <button type="button" onClick={() => dispatch(clearCard())}>
        X
      </button>
    </Section>
  );
};
