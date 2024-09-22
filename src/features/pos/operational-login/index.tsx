import { Button, Card } from "@/src/features";
import Link from "next/link";
import Image from "next/image";

export function OperationalLogin() {

    // const handleButtonClick = (value: string) => {
    //     if (pin.length < 6) {
    //         setPin(pin + value);
    //     }
    // };

    // const handleClear = () => {
    //     setPin('');
    // };

    // const handleDelete = () => {
    //     setPin(pin.slice(0, -1));
    // };

    // const handleSubmit = async (e: React.FormEvent) => {
    //     e.preventDefault();
    
    //     try {
    //         const response = await fetch('https://salemate-be-production.up.railway.app/auth/login/pin', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ pin }),
    //         });

    //         console.log('Response: ', response)

    //         if (response.ok) {
    //           // On successful login, redirect to the /superadmin page
    //             const data = await response.json();
    //             const {access_token} = data.data
    //             Cookies.set(token, access_token)
    //             const { user_name } = data.data
    //             setUsername(user_name)
    //             console.log ('data: ', data)
    //             console.log('Login successful, redirecting...');  
    //             router.push('/pos/pos-home');
    //         } else {
    //             const errorData = await response.json();
    //             console.error('Login failed:', errorData.message);
    //         }
    //     } catch (error) {
    //         console.error('An error occurred during login:', error);
    //     }
    // };
    const pin = [1,2,3,4,5,6,7,8,9]

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#A5BE6A] p-6">
            <div className="flex flex-col items-center justify-center rounded-lg p-6 w-full max-w-md">
            <button className="absolute top-6 right-6 w-8 h-8">
            </button>

                <Card className="mb-8 flex items-center justify-center space-x-4">
                    {[...Array(6)].map((_, index) => (
                        <div 
                            key={index} 
                            className="w-12 h-16 bg-white text-4xl font-bold text-center rounded-lg flex items-center justify-center"
                        >
                            {pin[index] || ''}
                        </div>
                    ))}
                </Card>

                <Card className="text-center">
                    <form className="w-full font-bold">
                        <div className="grid grid-cols-3 gap-4 mb-4">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                                <button 
                                    key={num} 
                                    type="button" 
                                    className="p-4 bg-white text-2xl rounded-[10px] hover:bg-gray-5 border border-gray-4"
                                >
                                    {num}
                                </button>
                            ))}
                            <button 
                                type="button" 
                                className="p-4 bg-white text-2xl rounded-[10px] hover:bg-gray-5 border border-gray-4"
                            >
                                CLEAR
                            </button>
                            <button 
                                type="button"  
                                className="p-4 bg-white text-2xl rounded-[10px] hover:bg-gray-5 border border-gray-4"
                            >
                                0
                            </button>
                            <button 
                                type="button" 
                                className="p-4 bg-white text-2xl rounded-[10px] hover:bg-gray-5 border border-gray-4"
                            >
                                DELETE
                            </button>
                        </div>

                        <div className="flex justify-center text-2xl font-bold">
                            <Button 
                                type="submit" 
                                className="mt-6"
                            >
                                Enter PIN
                            </Button>
                        </div>
                    </form>
                    <Link href="/login" className="text-gray-3 text-sm hover:underline">back to Login Page</Link>

                    <div className="absolute flex flex-row top-0 left-0 -z-50 w-full h-full justify-between p-10">
                        <div className="pl-10 text-[3rem] text-white font-bold w-[500px]">
                            <div className="h-full flex flex-col justify-center text-left">
                                <h1 className="-mt-3">
                                    Doing business
                                </h1>
                                <h1 className="-mt-3">
                                    is easy thanks to
                                </h1>
                                <h1 className="-mt-3">
                                    Salemate
                                </h1>
                                <br />
                                <h1 className="-mt-3">
                                    Everything is 
                                </h1>
                                <h1 className="-mt-3">
                                    well organised
                                </h1>
                                <h1 className="-mt-3">
                                    and updated
                                </h1>
                                <h1 className="-mt-3">
                                    quickly!
                                </h1>
                            </div>
                            <div className="absolute text-[20rem] -mt-[55rem] -ml-[3rem] opacity-30">
                                <h1>“</h1>
                            </div>
                        </div>
                        <div>
                            <Image
                                height="100"
                                width="100"                            
                                src="/favicon.png"
                                alt="Salemate Logo"
                            />
                        </div>
                        <div>
                            <Image
                                height="903"
                                width="500"                            
                                src="/pin-img.png"
                                alt="Salemate Logo"
                            />
                        </div>
                    </div>
                </Card>

            </div>
        </div>
    );
}