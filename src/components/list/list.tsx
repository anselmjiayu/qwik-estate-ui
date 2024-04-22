import { component$ } from '@builder.io/qwik'
import './list.scss'
import { listData } from '~/lib/dummydata'
import { Card } from '../card/card'

export const List = component$(()=> {
    return (
        <div class="list">
            {listData.map(item => (
                <Card key={item.id} item={item} />
            ))}
        </div>
    )
})
