import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/filterSlice';


export const Filter = () => {
    const dispach = useDispatch();
    const filter = useSelector(selectFilter)
    console.log(filter);
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
