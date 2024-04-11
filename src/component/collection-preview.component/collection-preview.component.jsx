import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({items, title}) => (
<div className='collection-preview'>
    <div className='title'>{title.toUpperCase()}
    <div className='preview'>
        {
            items.filter((item, idx) => idx < 4).map (({id, ...otherItemProps}) => (
               <CollectionItem key={id} {...otherItemProps}/>
            ))
        }
    </div>
    </div>
</div>
)


export default CollectionPreview