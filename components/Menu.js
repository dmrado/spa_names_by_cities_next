import Link from 'next/link'


export default () => {
    return (<ul>
        <li>
            <Link href="/about">
            <a>Описание проекта</a>
            </Link>
        </li>
        <li>
            <Link href="/index">
                <a>Стартовая страница</a>
            </Link>
        </li>
        <li>
            <Link href="/yanmap">
                <a>Загрузить яндекс</a>
            </Link>
        </li>
    </ul>
);
}