import css from './Filter.module.css';
import { useSelector } from 'react-redux';
import { getFilter } from '../redux/selectors';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/filterSlice';


export const Filter = () => {
    const filter = useSelector(getFilter)
    const dispach = useDispatch();
    const onFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispach(setFilter(event.target.value));
    }

    return (
        <div className={css.filter}>
            <label htmlFor="filter">Find contacts by name</label>
            <input
                type="text"
                name="filter"
                value={filter}
                onChange={onFilterChange}
                placeholder="Filter contacts"
            />
        </div>
    );
};
