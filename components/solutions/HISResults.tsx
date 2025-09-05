'use client'

import { motion } from 'framer-motion'
import { 
  ChartBarIcon, 
  ArrowTrendingUpIcon, 
  ClockIcon, 
  UserGroupIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline'

const metrics = [
  {
    icon: ArrowTrendingUpIcon,
    title: '20%',
    subtitle: 'Reduction in Medication Errors',
    description: 'Thanks to AI-powered decision support and integrated drug interaction checking',
    color: 'success'
  },
  {
    icon: ClockIcon,
    title: '15%',
    subtitle: 'Faster Discharge Processing',
    description: 'Streamlined workflows and automated documentation reduce discharge time',
    color: 'primary'
  },
  {
    icon: UserGroupIcon,
    title: '40%',
    subtitle: 'Improved Patient Satisfaction',
    description: 'Better coordination and reduced wait times lead to higher satisfaction scores',
    color: 'healthcare'
  },
  {
    icon: CurrencyDollarIcon,
    title: '25%',
    subtitle: 'Cost Savings',
    description: 'Reduced administrative overhead and improved operational efficiency',
    color: 'warning'
  }
]

