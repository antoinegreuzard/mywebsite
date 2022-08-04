import styles from '../../../css/dashboard.scss';

import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Inertia } from "@inertiajs/inertia";
import { Head, usePage, Link } from '@inertiajs/inertia-react';
// import Pagination from '@/Components/Pagination';

export default function Dashboard(props) {
    const { posts } = usePage().props

    function destroy(e) {
        if (confirm("Are you sure you want to delete this post?")) {
            Inertia.delete(route("posts.destroy", e.currentTarget.id));
        }
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Posts</h2>}
        >
            <Head title="Posts" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">

                            <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                    href={ route("posts.create") }
                                >
                                    Create Post
                                </Link>
                            </div>

                            <table className="table-fixed w-full">
                                <thead>
                                    <tr className="bg-gray-700">
                                        <th className="px-4 py-2">Image</th>
                                        <th className="px-4 py-2">Titre</th>
										<th className="px-4 py-2">Langages</th>
										<th className="px-4 py-2">Lien</th>
                                        <th className="px-4 py-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {posts.map(({ id, title, image, projet, langage, link }) => (
                                        <tr>
                                            <td className="border px-4 py-2 text-gray-500">{ image }</td>
                                            <td className="border px-4 py-2 text-gray-500">{ title }</td>
											<td className="border px-4 py-2 text-gray-500">{ langage }</td>
											<td className="border px-4 py-2 text-gray-500">{ link }</td>
                                            <td className="border px-4 py-2 text-gray-500">
                                                <Link
                                                    tabIndex="1"
                                                    className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                                                    href={route("posts.edit", id)}
                                                >
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={destroy}
                                                    id={id}
                                                    tabIndex="-1"
                                                    type="button"
                                                    className="mx-1 px-4 py-2 text-sm text-white bg-red-500 rounded"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}

                                    {posts.length === 0 && (
                                        <tr>
                                            <td
                                                className="px-6 py-4 border-t text-gray-800"
                                                colSpan="4" 
                                            >
                                                No contacts found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
							
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
