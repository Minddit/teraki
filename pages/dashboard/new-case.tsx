import { useState } from 'react';
import PrincipalLayout from '@components/layouts/PrincipalLayout';
import { ArrowUpTrayIcon, DocumentTextIcon, CurrencyDollarIcon, UserCircleIcon } from '@heroicons/react/24/outline';

export default function NewCase() {
  const [formData, setFormData] = useState({
    clientName: '',
    email: '',
    phone: '',
    transactionHash: '',
    walletAddress: '',
    amount: '',
    cryptocurrency: 'ETH',
    dateOfLoss: '',
    description: '',
    priority: 'medium',
    documents: [] as File[]
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({
        ...prev,
        documents: [...prev.documents, ...Array.from(e.target.files as FileList)]
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-[#0d0f1b] p-8">
      <div className="max-w-4xl mx-auto bg-[#1B1B1B]/40 rounded-2xl p-8 backdrop-blur-sm">
        <h1 className="text-3xl font-bold text-white mb-8">New Recovery Case</h1>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-cyan-400 mb-4">
              <UserCircleIcon className="h-6 w-6" />
              <h2 className="text-xl font-semibold">Client Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  name="clientName"
                  value={formData.clientName}
                  onChange={handleInputChange}
                  className="w-full bg-[#2C2C2C] text-white rounded-lg p-3 focus:ring-2 focus:ring-cyan-400"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-[#2C2C2C] text-white rounded-lg p-3 focus:ring-2 focus:ring-cyan-400"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-[#2C2C2C] text-white rounded-lg p-3 focus:ring-2 focus:ring-cyan-400"
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-cyan-400 mb-4">
              <CurrencyDollarIcon className="h-6 w-6" />
              <h2 className="text-xl font-semibold">Transaction Details</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 mb-2">Transaction Hash</label>
                <input
                  type="text"
                  name="transactionHash"
                  value={formData.transactionHash}
                  onChange={handleInputChange}
                  className="w-full bg-[#2C2C2C] text-white rounded-lg p-3 focus:ring-2 focus:ring-cyan-400"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Wallet Address</label>
                <input
                  type="text"
                  name="walletAddress"
                  value={formData.walletAddress}
                  onChange={handleInputChange}
                  className="w-full bg-[#2C2C2C] text-white rounded-lg p-3 focus:ring-2 focus:ring-cyan-400"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Amount</label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  className="w-full bg-[#2C2C2C] text-white rounded-lg p-3 focus:ring-2 focus:ring-cyan-400"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Cryptocurrency</label>
                <select
                  name="cryptocurrency"
                  value={formData.cryptocurrency}
                  onChange={handleInputChange}
                  className="w-full bg-[#2C2C2C] text-white rounded-lg p-3 focus:ring-2 focus:ring-cyan-400"
                  required
                >
                  <option value="ETH">Ethereum (ETH)</option>
                  <option value="BTC">Bitcoin (BTC)</option>
                  <option value="USDT">Tether (USDT)</option>
                  <option value="USDC">USD Coin (USDC)</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Date of Loss</label>
                <input
                  type="date"
                  name="dateOfLoss"
                  value={formData.dateOfLoss}
                  onChange={handleInputChange}
                  className="w-full bg-[#2C2C2C] text-white rounded-lg p-3 focus:ring-2 focus:ring-cyan-400"
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-cyan-400 mb-4">
              <DocumentTextIcon className="h-6 w-6" />
              <h2 className="text-xl font-semibold">Case Details</h2>
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full bg-[#2C2C2C] text-white rounded-lg p-3 focus:ring-2 focus:ring-cyan-400 min-h-[120px]"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-300 mb-2">Priority</label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleInputChange}
                className="w-full bg-[#2C2C2C] text-white rounded-lg p-3 focus:ring-2 focus:ring-cyan-400"
                required
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Supporting Documents</label>
              <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center">
                <div className="flex items-center justify-center">
                  <ArrowUpTrayIcon className="h-12 w-12 text-gray-400" />
                </div>
                <p className="mt-2 text-sm text-gray-400">
                  Upload screenshots of your conversation with the scammer, and any other important details
                </p>
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-cyan-400 bg-[#2C2C2C] hover:bg-cyan-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 cursor-pointer transition-colors"
                >
                  Select Files
                </label>
              </div>
              {formData.documents.length > 0 && (
                <div className="mt-4">
                  <p className="text-gray-300">Selected files:</p>
                  <ul className="list-disc list-inside text-gray-400">
                    {formData.documents.map((file, index) => (
                      <li key={index}>{file.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-end mt-8">
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0d0f1b] transition-colors"
            >
              Submit Case
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

NewCase.Layout = PrincipalLayout;
