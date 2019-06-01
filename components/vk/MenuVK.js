import Link from 'next/link'


export default () => {
    return (<ul>
            <li>
                <Link href="/vk-user">
                    <a>Пользователи</a>
                </Link>
            </li>
            <li>
                <Link href="/vk-groups">
                    <a>Группы</a>
                </Link>
            </li>
            <li>
                <Link href="/vk-cities">
                    <a>Города</a>
                </Link>
            </li>

        </ul>
    );
}