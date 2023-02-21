export default {
  label: 'Basic Numbers',
  id: 'kg-numbers',
  list: [
    {
      type: 'tracing',
      label: 'Writing Numbers',
      id: 'write',
      commonData: {
        type: 'custom',
        audio: 'math/no-1-50.mp3',
        yGuides: [20, 120, 220]
      },
      data: [
        {
          source: [
            {
              id: '1',
              paths: ['M 37 20 L 37 220'],
              width: 100,
              audio: 0
            },
            {
              id: '2',
              paths: [
                'M 22 40 C 67 15 128 9 122 64 C 114 115 63 175 15 220 ',
                'M 15 220 L 180 220'
              ],
              width: 200,
              audio: 2
            },
            {
              id: '3',
              paths: [
                'M 17 20 Q 117 20 117 70 Q 117 120 17 120 ',
                'M 17 120 Q 117 120 117 170 Q 117 220 17 220 '
              ],
              width: 130,
              audio: 4
            },
            {
              id: '4',
              paths: [
                'M 15 20 L 15 120',
                'M 15 120 L 120 120 ',
                'M 73 55 L 73 200 '
              ],
              width: 140,
              audio: 6
            },
            {
              id: '5',
              paths: [
                'M 125 20 L 15 20 L 15 120 ',
                'M 15 120 C 54 77 114 81 124 129 C 140 207 72 239 14 205 '
              ],
              width: 140,
              audio: 8
            },
            {
              id: '6',
              paths: [
                'M 101 21 C 20 41 12 142 25 181 C 38 235 136 230 137 177 ',
                'M 137 177 C 140 149 120 86 20 123 '
              ],
              width: 150,
              audio: 10
            },
            {
              id: '7',
              paths: ['M 15 20 L 130 20 ', 'M 130 20 L 70 220'],
              width: 150,
              audio: 12
            },
            {
              id: '8',
              paths: [
                'M 80 20 C 41 20 6 55 39 104 C 52 125 83 127 98 142 C 124 160 128 219 80 220 ',
                'M 80 220 C 9 221 18 165 37 147 C 54 127 78 111 110 85 C 134 64 122 19 80 20 '
              ],
              width: 150,
              audio: 14
            },
            {
              id: '9',
              paths: [
                'M 100 20 Q 15 21 15 71 Q 15 121 100 120 ',
                'M 100 20 L 100 220 '
              ],
              width: 110,
              audio: 16
            },
            {
              id: '10',
              paths: [
                'M 20 20 L 20 220',
                'M 145 21 C 245 21 245 221 145 221 ',
                'M 145 221 C 45 221 45 21 145 21 '
              ],
              width: 230,
              audio: 18
            }
          ]
        },
        {
          source: [
            {
              id: '11',
              paths: ['M 37 20 L 37 220', 'M 140 20 L 140 220'],
              width: 170,
              audio: 20
            },
            {
              id: '12',
              paths: [
                'M 37 20 L 37 220',
                'M 102 40 C 147 15 208 9 202 64 C 194 115 143 175 95 220',
                'M 95 220 L 260 220'
              ],
              width: 265,
              audio: 22
            },
            {
              id: '13',
              paths: [
                'M 37 20 L 37 220',
                'M 90 20 Q 190 20 190 70 Q 190 120 90 120',
                'M 90 120 Q 190 120 190 170 Q 190 220 90 220'
              ],
              width: 200,
              audio: 24
            },
            {
              id: '14',
              paths: [
                'M 37 20 L 37 220',
                'M 90 20 L 90 120',
                'M 90 120 L 195 120',
                'M 148 55 L 148 220'
              ],
              width: 205,
              audio: 26
            },
            {
              id: '15',
              paths: [
                'M 37 20 L 37 220',
                'M 200 20 L 90 20 L 90 120',
                'M 91 120 C 130 77 190 81 200 129 C 216 207 148 239 90 205'
              ],
              width: 210,
              audio: 28
            },
            {
              id: '16',
              paths: [
                'M 37 20 L 37 220',
                'M 171 21 C 90 41 82 142 95 181 C 108 235 206 230 207 177',
                'M 207 177 C 210 149 190 86 90 123'
              ],
              width: 210,
              audio: 30
            },
            {
              id: '17',
              paths: [
                'M 37 20 L 37 220',
                'M 90 20 L 205 20',
                'M 205 20 L 145 220'
              ],
              width: 215,
              audio: 32
            },
            {
              id: '18',
              paths: [
                'M 37 20 L 37 220',
                'M 155 20 C 116 20 81 55 114 104 C 127 125 158 127 173 142 C 199 160 203 219 155 220',
                'M 155 220 C 84 221 93 165 112 147 C 129 127 153 111 185 85 C 209 64 197 19 155 20'
              ],
              width: 205,
              audio: 34
            },
            {
              id: '19',
              paths: [
                'M 37 20 L 37 220',
                'M 175 20 Q 90 21 90 71 Q 90 121 175 120',
                'M 175 20 L 175 220'
              ],
              width: 185,
              audio: 36
            },
            {
              id: '20',
              paths: [
                'M 17 40 C 62 15 123 9 117 64 C 109 115 58 175 10 220',
                'M 10 220 L 175 220',
                'M 235 21 C 335 21 335 221 235 221',
                'M 235 221 C 135 221 135 21 235 21'
              ],
              width: 320,
              audio: 38
            }
          ]
        },
        {
          source: [
            {
              id: '21',
              paths: [
                'M 17 40 C 62 15 123 9 117 64 C 109 115 58 175 10 220',
                'M 10 220 L 175 220',
                'M 220 20 L 220 220'
              ],
              width: 225,
              audio: 40
            },
            {
              id: '22',
              paths: [
                'M 17 40 C 62 15 123 9 117 64 C 109 115 58 175 10 220',
                'M 10 220 L 175 220',
                'M 202 40 C 247 15 308 9 302 64 C 294 115 243 175 195 220 ',
                'M 195 220 L 360 220 '
              ],
              width: 360,
              audio: 42
            },
            {
              id: '23',
              paths: [
                'M 17 40 C 62 15 123 9 117 64 C 109 115 58 175 10 220',
                'M 10 220 L 175 220',
                'M 190 20 Q 290 20 290 70 Q 290 120 190 120 ',
                'M 190 120 Q 290 120 290 170 Q 290 220 190 220 '
              ],
              width: 295,
              audio: 44
            },
            {
              id: '24',
              paths: [
                'M 17 40 C 62 15 123 9 117 64 C 109 115 58 175 10 220',
                'M 10 220 L 175 220',
                'M 190 20 L 190 120',
                'M 190 120 L 295 120',
                'M 248 55 L 248 220'
              ],
              width: 295,
              audio: 46
            },
            {
              id: '25',
              paths: [
                'M 17 40 C 62 15 123 9 117 64 C 109 115 58 175 10 220',
                'M 10 220 L 175 220',
                'M 300 20 L 190 20 L 190 120',
                'M 191 120 C 230 77 290 81 300 129 C 316 207 248 239 190 205'
              ],
              width: 310,
              audio: 48
            },
            {
              id: '26',
              paths: [
                'M 17 40 C 62 15 123 9 117 64 C 109 115 58 175 10 220',
                'M 10 220 L 175 220',
                'M 271 21 C 190 41 182 142 195 181 C 208 235 306 230 307 177',
                'M 307 177 C 310 149 290 86 190 123'
              ],
              width: 310,
              audio: 50
            },
            {
              id: '27',
              paths: [
                'M 17 40 C 62 15 123 9 117 64 C 109 115 58 175 10 220',
                'M 10 220 L 175 220',
                'M 190 20 L 305 20',
                'M 305 20 L 245 220'
              ],
              width: 310,
              audio: 52
            },
            {
              id: '28',
              paths: [
                'M 17 40 C 62 15 123 9 117 64 C 109 115 58 175 10 220',
                'M 10 220 L 175 220',
                'M 255 20 C 216 20 181 55 214 104 C 227 125 258 127 273 142 C 299 160 303 219 255 220',
                'M 255 220 C 184 221 193 165 212 147 C 229 127 253 111 285 85 C 309 64 297 19 255 20'
              ],
              width: 300,
              audio: 54
            },
            {
              id: '29',
              paths: [
                'M 17 40 C 62 15 123 9 117 64 C 109 115 58 175 10 220',
                'M 10 220 L 175 220',
                'M 275 20 Q 190 21 190 71 Q 190 121 275 120',
                'M 275 20 L 275 220'
              ],
              width: 280,
              audio: 56
            },
            {
              id: '30',
              paths: [
                'M 20 20 Q 120 20 120 70 Q 120 120 20 120',
                'M 20 120 Q 120 120 120 170 Q 120 220 20 220',
                'M 235 21 C 335 21 335 221 235 221',
                'M 235 221 C 135 221 135 21 235 21'
              ],
              width: 320,
              audio: 58
            }
          ]
        },
        {
          source: [
            {
              id: '31',
              paths: [
                'M 20 20 Q 120 20 120 70 Q 120 120 20 120',
                'M 20 120 Q 120 120 120 170 Q 120 220 20 220',
                'M 220 20 L 220 220'
              ],
              width: 225,
              audio: 60
            },
            {
              id: '32',
              paths: [
                'M 20 20 Q 120 20 120 70 Q 120 120 20 120',
                'M 20 120 Q 120 120 120 170 Q 120 220 20 220',
                'M 202 40 C 247 15 308 9 302 64 C 294 115 243 175 195 220 ',
                'M 195 220 L 360 220 '
              ],
              width: 360,
              audio: 62
            },
            {
              id: '33',
              paths: [
                'M 20 20 Q 120 20 120 70 Q 120 120 20 120',
                'M 20 120 Q 120 120 120 170 Q 120 220 20 220',
                'M 190 20 Q 290 20 290 70 Q 290 120 190 120 ',
                'M 190 120 Q 290 120 290 170 Q 290 220 190 220 '
              ],
              width: 295,
              audio: 64
            },
            {
              id: '34',
              paths: [
                'M 20 20 Q 120 20 120 70 Q 120 120 20 120',
                'M 20 120 Q 120 120 120 170 Q 120 220 20 220',
                'M 190 20 L 190 120',
                'M 190 120 L 295 120',
                'M 248 55 L 248 220'
              ],
              width: 295,
              audio: 66
            },
            {
              id: '35',
              paths: [
                'M 20 20 Q 120 20 120 70 Q 120 120 20 120',
                'M 20 120 Q 120 120 120 170 Q 120 220 20 220',
                'M 300 20 L 190 20 L 190 120',
                'M 191 120 C 230 77 290 81 300 129 C 316 207 248 239 190 205'
              ],
              width: 310,
              audio: 68
            },
            {
              id: '36',
              paths: [
                'M 20 20 Q 120 20 120 70 Q 120 120 20 120',
                'M 20 120 Q 120 120 120 170 Q 120 220 20 220',
                'M 271 21 C 190 41 182 142 195 181 C 208 235 306 230 307 177',
                'M 307 177 C 310 149 290 86 190 123'
              ],
              width: 310,
              audio: 70
            },
            {
              id: '37',
              paths: [
                'M 20 20 Q 120 20 120 70 Q 120 120 20 120',
                'M 20 120 Q 120 120 120 170 Q 120 220 20 220',
                'M 190 20 L 305 20',
                'M 305 20 L 245 220'
              ],
              width: 310,
              audio: 72
            },
            {
              id: '38',
              paths: [
                'M 20 20 Q 120 20 120 70 Q 120 120 20 120',
                'M 20 120 Q 120 120 120 170 Q 120 220 20 220',
                'M 255 20 C 216 20 181 55 214 104 C 227 125 258 127 273 142 C 299 160 303 219 255 220',
                'M 255 220 C 184 221 193 165 212 147 C 229 127 253 111 285 85 C 309 64 297 19 255 20'
              ],
              width: 300,
              audio: 74
            },
            {
              id: '39',
              paths: [
                'M 20 20 Q 120 20 120 70 Q 120 120 20 120',
                'M 20 120 Q 120 120 120 170 Q 120 220 20 220',
                'M 275 20 Q 190 21 190 71 Q 190 121 275 120',
                'M 275 20 L 275 220'
              ],
              width: 280,
              audio: 76
            },
            {
              id: '40',
              paths: [
                'M 30 20 L 30 120',
                'M 30 120 L 135 120',
                'M 90 55 L 90 220',
                'M 235 21 C 335 21 335 221 235 221',
                'M 235 221 C 135 221 135 21 235 21'
              ],
              width: 320,
              audio: 78
            }
          ]
        },
        {
          source: [
            {
              id: '41',
              paths: [
                'M 30 20 L 30 120',
                'M 30 120 L 135 120',
                'M 90 55 L 90 220',
                'M 220 20 L 220 220'
              ],
              width: 225,
              audio: 80
            },
            {
              id: '42',
              paths: [
                'M 30 20 L 30 120',
                'M 30 120 L 135 120',
                'M 90 55 L 90 220',
                'M 202 40 C 247 15 308 9 302 64 C 294 115 243 175 195 220 ',
                'M 195 220 L 360 220 '
              ],
              width: 360,
              audio: 82
            },
            {
              id: '43',
              paths: [
                'M 30 20 L 30 120',
                'M 30 120 L 135 120',
                'M 90 55 L 90 220',
                'M 190 20 Q 290 20 290 70 Q 290 120 190 120 ',
                'M 190 120 Q 290 120 290 170 Q 290 220 190 220 '
              ],
              width: 295,
              audio: 84
            },
            {
              id: '44',
              paths: [
                'M 30 20 L 30 120',
                'M 30 120 L 135 120',
                'M 90 55 L 90 220',
                'M 190 20 L 190 120',
                'M 190 120 L 295 120',
                'M 248 55 L 248 220'
              ],
              width: 295,
              audio: 86
            },
            {
              id: '45',
              paths: [
                'M 30 20 L 30 120',
                'M 30 120 L 135 120',
                'M 90 55 L 90 220',
                'M 300 20 L 190 20 L 190 120',
                'M 191 120 C 230 77 290 81 300 129 C 316 207 248 239 190 205'
              ],
              width: 310,
              audio: 88
            },
            {
              id: '46',
              paths: [
                'M 30 20 L 30 120',
                'M 30 120 L 135 120',
                'M 90 55 L 90 220',
                'M 271 21 C 190 41 182 142 195 181 C 208 235 306 230 307 177',
                'M 307 177 C 310 149 290 86 190 123'
              ],
              width: 310,
              audio: 90
            },
            {
              id: '47',
              paths: [
                'M 30 20 L 30 120',
                'M 30 120 L 135 120',
                'M 90 55 L 90 220',
                'M 190 20 L 305 20',
                'M 305 20 L 245 220'
              ],
              width: 310,
              audio: 92
            },
            {
              id: '48',
              paths: [
                'M 30 20 L 30 120',
                'M 30 120 L 135 120',
                'M 90 55 L 90 220',
                'M 255 20 C 216 20 181 55 214 104 C 227 125 258 127 273 142 C 299 160 303 219 255 220',
                'M 255 220 C 184 221 193 165 212 147 C 229 127 253 111 285 85 C 309 64 297 19 255 20'
              ],
              width: 300,
              audio: 94
            },
            {
              id: '49',
              paths: [
                'M 30 20 L 30 120',
                'M 30 120 L 135 120',
                'M 90 55 L 90 220',
                'M 275 20 Q 190 21 190 71 Q 190 121 275 120',
                'M 275 20 L 275 220'
              ],
              width: 280,
              audio: 96
            },
            {
              id: '50',
              paths: [
                'M 140 20 L 30 20 L 30 120',
                'M 31 120 C 70 77 130 81 140 129 C 156 207 88 239 30 205 ',
                'M 235 21 C 335 21 335 221 235 221',
                'M 235 221 C 135 221 135 21 235 21'
              ],
              width: 320,
              audio: 98
            }
          ]
        }
      ]
    },
    {
      type: 'tracing',
      label: 'Writing Numbers - 2',
      id: 'write-2',
      commonData: {
        type: 'custom',
        audio: 'math/no-51-100.mp3',
        yGuides: [20, 120, 220]
      },
      data: [
        {
          source: [
            {
              id: '51',
              paths: [
                'M 140 20 L 30 20 L 30 120',
                'M 31 120 C 70 77 130 81 140 129 C 156 207 88 239 30 205 ',
                'M 220 20 L 220 220'
              ],
              width: 225,
              audio: 0
            },
            {
              id: '52',
              paths: [
                'M 140 20 L 30 20 L 30 120',
                'M 31 120 C 70 77 130 81 140 129 C 156 207 88 239 30 205 ',
                'M 202 40 C 247 15 308 9 302 64 C 294 115 243 175 195 220 ',
                'M 195 220 L 360 220 '
              ],
              width: 360,
              audio: 2
            },
            {
              id: '53',
              paths: [
                'M 140 20 L 30 20 L 30 120',
                'M 31 120 C 70 77 130 81 140 129 C 156 207 88 239 30 205 ',
                'M 190 20 Q 290 20 290 70 Q 290 120 190 120 ',
                'M 190 120 Q 290 120 290 170 Q 290 220 190 220 '
              ],
              width: 295,
              audio: 4
            },
            {
              id: '54',
              paths: [
                'M 140 20 L 30 20 L 30 120',
                'M 31 120 C 70 77 130 81 140 129 C 156 207 88 239 30 205 ',
                'M 190 20 L 190 120',
                'M 190 120 L 295 120',
                'M 248 55 L 248 220'
              ],
              width: 295,
              audio: 6
            },
            {
              id: '55',
              paths: [
                'M 140 20 L 30 20 L 30 120',
                'M 31 120 C 70 77 130 81 140 129 C 156 207 88 239 30 205 ',
                'M 300 20 L 190 20 L 190 120',
                'M 191 120 C 230 77 290 81 300 129 C 316 207 248 239 190 205'
              ],
              width: 310,
              audio: 8
            },
            {
              id: '56',
              paths: [
                'M 140 20 L 30 20 L 30 120',
                'M 31 120 C 70 77 130 81 140 129 C 156 207 88 239 30 205 ',
                'M 271 21 C 190 41 182 142 195 181 C 208 235 306 230 307 177',
                'M 307 177 C 310 149 290 86 190 123'
              ],
              width: 310,
              audio: 10
            },
            {
              id: '57',
              paths: [
                'M 140 20 L 30 20 L 30 120',
                'M 31 120 C 70 77 130 81 140 129 C 156 207 88 239 30 205 ',
                'M 190 20 L 305 20',
                'M 305 20 L 245 220'
              ],
              width: 310,
              audio: 12
            },
            {
              id: '58',
              paths: [
                'M 140 20 L 30 20 L 30 120',
                'M 31 120 C 70 77 130 81 140 129 C 156 207 88 239 30 205 ',
                'M 255 20 C 216 20 181 55 214 104 C 227 125 258 127 273 142 C 299 160 303 219 255 220',
                'M 255 220 C 184 221 193 165 212 147 C 229 127 253 111 285 85 C 309 64 297 19 255 20'
              ],
              width: 300,
              audio: 14
            },
            {
              id: '59',
              paths: [
                'M 140 20 L 30 20 L 30 120',
                'M 31 120 C 70 77 130 81 140 129 C 156 207 88 239 30 205 ',
                'M 275 20 Q 190 21 190 71 Q 190 121 275 120',
                'M 275 20 L 275 220'
              ],
              width: 280,
              audio: 16
            },
            {
              id: '60',
              paths: [
                'M 111 21 C 30 41 22 142 35 181 C 48 235 146 230 147 177 ',
                'M 147 177 C 150 149 130 86 30 123 ',
                'M 235 21 C 335 21 335 221 235 221',
                'M 235 221 C 135 221 135 21 235 21'
              ],
              width: 320,
              audio: 18
            }
          ]
        },
        {
          source: [
            {
              id: '61',
              paths: [
                'M 111 21 C 30 41 22 142 35 181 C 48 235 146 230 147 177 ',
                'M 147 177 C 150 149 130 86 30 123 ',
                'M 220 20 L 220 220'
              ],
              width: 225,
              audio: 20
            },
            {
              id: '62',
              paths: [
                'M 111 21 C 30 41 22 142 35 181 C 48 235 146 230 147 177 ',
                'M 147 177 C 150 149 130 86 30 123 ',
                'M 202 40 C 247 15 308 9 302 64 C 294 115 243 175 195 220 ',
                'M 195 220 L 360 220 '
              ],
              width: 360,
              audio: 22
            },
            {
              id: '63',
              paths: [
                'M 111 21 C 30 41 22 142 35 181 C 48 235 146 230 147 177 ',
                'M 147 177 C 150 149 130 86 30 123 ',
                'M 190 20 Q 290 20 290 70 Q 290 120 190 120 ',
                'M 190 120 Q 290 120 290 170 Q 290 220 190 220 '
              ],
              width: 295,
              audio: 24
            },
            {
              id: '64',
              paths: [
                'M 111 21 C 30 41 22 142 35 181 C 48 235 146 230 147 177 ',
                'M 147 177 C 150 149 130 86 30 123 ',
                'M 190 20 L 190 120',
                'M 190 120 L 295 120',
                'M 248 55 L 248 220'
              ],
              width: 295,
              audio: 26
            },
            {
              id: '65',
              paths: [
                'M 111 21 C 30 41 22 142 35 181 C 48 235 146 230 147 177 ',
                'M 147 177 C 150 149 130 86 30 123 ',
                'M 300 20 L 190 20 L 190 120',
                'M 191 120 C 230 77 290 81 300 129 C 316 207 248 239 190 205'
              ],
              width: 310,
              audio: 28
            },
            {
              id: '66',
              paths: [
                'M 111 21 C 30 41 22 142 35 181 C 48 235 146 230 147 177 ',
                'M 147 177 C 150 149 130 86 30 123 ',
                'M 271 21 C 190 41 182 142 195 181 C 208 235 306 230 307 177',
                'M 307 177 C 310 149 290 86 190 123'
              ],
              width: 310,
              audio: 30
            },
            {
              id: '67',
              paths: [
                'M 111 21 C 30 41 22 142 35 181 C 48 235 146 230 147 177 ',
                'M 147 177 C 150 149 130 86 30 123 ',
                'M 190 20 L 305 20',
                'M 305 20 L 245 220'
              ],
              width: 310,
              audio: 32
            },
            {
              id: '68',
              paths: [
                'M 111 21 C 30 41 22 142 35 181 C 48 235 146 230 147 177 ',
                'M 147 177 C 150 149 130 86 30 123 ',
                'M 255 20 C 216 20 181 55 214 104 C 227 125 258 127 273 142 C 299 160 303 219 255 220',
                'M 255 220 C 184 221 193 165 212 147 C 229 127 253 111 285 85 C 309 64 297 19 255 20'
              ],
              width: 300,
              audio: 34
            },
            {
              id: '69',
              paths: [
                'M 111 21 C 30 41 22 142 35 181 C 48 235 146 230 147 177 ',
                'M 147 177 C 150 149 130 86 30 123 ',
                'M 275 20 Q 190 21 190 71 Q 190 121 275 120',
                'M 275 20 L 275 220'
              ],
              width: 280,
              audio: 36
            },
            {
              id: '70',
              paths: [
                'M 25 20 L 140 20',
                'M 140 20 L 80 220',
                'M 235 21 C 335 21 335 221 235 221',
                'M 235 221 C 135 221 135 21 235 21'
              ],
              width: 320,
              audio: 38
            }
          ]
        },
        {
          source: [
            {
              id: '71',
              paths: [
                'M 25 20 L 140 20',
                'M 140 20 L 80 220',
                'M 220 20 L 220 220'
              ],
              width: 225,
              audio: 40
            },
            {
              id: '72',
              paths: [
                'M 25 20 L 140 20',
                'M 140 20 L 80 220',
                'M 202 40 C 247 15 308 9 302 64 C 294 115 243 175 195 220 ',
                'M 195 220 L 360 220 '
              ],
              width: 360,
              audio: 42
            },
            {
              id: '73',
              paths: [
                'M 25 20 L 140 20',
                'M 140 20 L 80 220',
                'M 190 20 Q 290 20 290 70 Q 290 120 190 120 ',
                'M 190 120 Q 290 120 290 170 Q 290 220 190 220 '
              ],
              width: 295,
              audio: 44
            },
            {
              id: '74',
              paths: [
                'M 25 20 L 140 20',
                'M 140 20 L 80 220',
                'M 190 20 L 190 120',
                'M 190 120 L 295 120',
                'M 248 55 L 248 220'
              ],
              width: 295,
              audio: 46
            },
            {
              id: '75',
              paths: [
                'M 25 20 L 140 20',
                'M 140 20 L 80 220',
                'M 300 20 L 190 20 L 190 120',
                'M 191 120 C 230 77 290 81 300 129 C 316 207 248 239 190 205'
              ],
              width: 310,
              audio: 48
            },
            {
              id: '76',
              paths: [
                'M 25 20 L 140 20',
                'M 140 20 L 80 220',
                'M 271 21 C 190 41 182 142 195 181 C 208 235 306 230 307 177',
                'M 307 177 C 310 149 290 86 190 123'
              ],
              width: 310,
              audio: 50
            },
            {
              id: '77',
              paths: [
                'M 25 20 L 140 20',
                'M 140 20 L 80 220',
                'M 190 20 L 305 20',
                'M 305 20 L 245 220'
              ],
              width: 310,
              audio: 52
            },
            {
              id: '78',
              paths: [
                'M 25 20 L 140 20',
                'M 140 20 L 80 220',
                'M 255 20 C 216 20 181 55 214 104 C 227 125 258 127 273 142 C 299 160 303 219 255 220',
                'M 255 220 C 184 221 193 165 212 147 C 229 127 253 111 285 85 C 309 64 297 19 255 20'
              ],
              width: 300,
              audio: 54
            },
            {
              id: '79',
              paths: [
                'M 25 20 L 140 20',
                'M 140 20 L 80 220',
                'M 275 20 Q 190 21 190 71 Q 190 121 275 120',
                'M 275 20 L 275 220'
              ],
              width: 280,
              audio: 56
            },
            {
              id: '80',
              paths: [
                'M 100 20 C 61 20 26 55 59 104 C 72 125 103 127 118 142 C 144 160 148 219 100 220 ',
                'M 100 220 C 29 221 38 165 57 147 C 74 127 98 111 130 85 C 154 64 142 19 100 20 ',
                'M 235 21 C 335 21 335 221 235 221',
                'M 235 221 C 135 221 135 21 235 21'
              ],
              width: 320,
              audio: 58
            }
          ]
        },
        {
          source: [
            {
              id: '81',
              paths: [
                'M 100 20 C 61 20 26 55 59 104 C 72 125 103 127 118 142 C 144 160 148 219 100 220 ',
                'M 100 220 C 29 221 38 165 57 147 C 74 127 98 111 130 85 C 154 64 142 19 100 20 ',
                'M 220 20 L 220 220'
              ],
              width: 225,
              audio: 60
            },
            {
              id: '82',
              paths: [
                'M 100 20 C 61 20 26 55 59 104 C 72 125 103 127 118 142 C 144 160 148 219 100 220 ',
                'M 100 220 C 29 221 38 165 57 147 C 74 127 98 111 130 85 C 154 64 142 19 100 20 ',
                'M 202 40 C 247 15 308 9 302 64 C 294 115 243 175 195 220 ',
                'M 195 220 L 360 220 '
              ],
              width: 360,
              audio: 62
            },
            {
              id: '83',
              paths: [
                'M 100 20 C 61 20 26 55 59 104 C 72 125 103 127 118 142 C 144 160 148 219 100 220 ',
                'M 100 220 C 29 221 38 165 57 147 C 74 127 98 111 130 85 C 154 64 142 19 100 20 ',
                'M 190 20 Q 290 20 290 70 Q 290 120 190 120 ',
                'M 190 120 Q 290 120 290 170 Q 290 220 190 220 '
              ],
              width: 295,
              audio: 64
            },
            {
              id: '84',
              paths: [
                'M 100 20 C 61 20 26 55 59 104 C 72 125 103 127 118 142 C 144 160 148 219 100 220 ',
                'M 100 220 C 29 221 38 165 57 147 C 74 127 98 111 130 85 C 154 64 142 19 100 20 ',
                'M 190 20 L 190 120',
                'M 190 120 L 295 120',
                'M 248 55 L 248 220'
              ],
              width: 295,
              audio: 66
            },
            {
              id: '85',
              paths: [
                'M 100 20 C 61 20 26 55 59 104 C 72 125 103 127 118 142 C 144 160 148 219 100 220 ',
                'M 100 220 C 29 221 38 165 57 147 C 74 127 98 111 130 85 C 154 64 142 19 100 20 ',
                'M 300 20 L 190 20 L 190 120',
                'M 191 120 C 230 77 290 81 300 129 C 316 207 248 239 190 205'
              ],
              width: 310,
              audio: 68
            },
            {
              id: '86',
              paths: [
                'M 100 20 C 61 20 26 55 59 104 C 72 125 103 127 118 142 C 144 160 148 219 100 220 ',
                'M 100 220 C 29 221 38 165 57 147 C 74 127 98 111 130 85 C 154 64 142 19 100 20 ',
                'M 271 21 C 190 41 182 142 195 181 C 208 235 306 230 307 177',
                'M 307 177 C 310 149 290 86 190 123'
              ],
              width: 310,
              audio: 70
            },
            {
              id: '87',
              paths: [
                'M 100 20 C 61 20 26 55 59 104 C 72 125 103 127 118 142 C 144 160 148 219 100 220 ',
                'M 100 220 C 29 221 38 165 57 147 C 74 127 98 111 130 85 C 154 64 142 19 100 20 ',
                'M 190 20 L 305 20',
                'M 305 20 L 245 220'
              ],
              width: 310,
              audio: 72
            },
            {
              id: '88',
              paths: [
                'M 100 20 C 61 20 26 55 59 104 C 72 125 103 127 118 142 C 144 160 148 219 100 220 ',
                'M 100 220 C 29 221 38 165 57 147 C 74 127 98 111 130 85 C 154 64 142 19 100 20 ',
                'M 255 20 C 216 20 181 55 214 104 C 227 125 258 127 273 142 C 299 160 303 219 255 220',
                'M 255 220 C 184 221 193 165 212 147 C 229 127 253 111 285 85 C 309 64 297 19 255 20'
              ],
              width: 300,
              audio: 74
            },
            {
              id: '89',
              paths: [
                'M 100 20 C 61 20 26 55 59 104 C 72 125 103 127 118 142 C 144 160 148 219 100 220 ',
                'M 100 220 C 29 221 38 165 57 147 C 74 127 98 111 130 85 C 154 64 142 19 100 20 ',
                'M 275 20 Q 190 21 190 71 Q 190 121 275 120',
                'M 275 20 L 275 220'
              ],
              width: 280,
              audio: 76
            },
            {
              id: '90',
              paths: [
                'M 125 20 Q 40 21 40 71 Q 40 121 125 120',
                'M 125 20 L 125 220',
                'M 235 21 C 335 21 335 221 235 221',
                'M 235 221 C 135 221 135 21 235 21'
              ],
              width: 320,
              audio: 78
            }
          ]
        },
        {
          source: [
            {
              id: '91',
              paths: [
                'M 125 20 Q 40 21 40 71 Q 40 121 125 120',
                'M 125 20 L 125 220',
                'M 220 20 L 220 220'
              ],
              width: 225,
              audio: 80
            },
            {
              id: '92',
              paths: [
                'M 125 20 Q 40 21 40 71 Q 40 121 125 120',
                'M 125 20 L 125 220',
                'M 202 40 C 247 15 308 9 302 64 C 294 115 243 175 195 220 ',
                'M 195 220 L 360 220 '
              ],
              width: 360,
              audio: 82
            },
            {
              id: '93',
              paths: [
                'M 125 20 Q 40 21 40 71 Q 40 121 125 120',
                'M 125 20 L 125 220',
                'M 190 20 Q 290 20 290 70 Q 290 120 190 120 ',
                'M 190 120 Q 290 120 290 170 Q 290 220 190 220 '
              ],
              width: 295,
              audio: 84
            },
            {
              id: '94',
              paths: [
                'M 125 20 Q 40 21 40 71 Q 40 121 125 120',
                'M 125 20 L 125 220',
                'M 190 20 L 190 120',
                'M 190 120 L 295 120',
                'M 248 55 L 248 220'
              ],
              width: 295,
              audio: 86
            },
            {
              id: '95',
              paths: [
                'M 125 20 Q 40 21 40 71 Q 40 121 125 120',
                'M 125 20 L 125 220',
                'M 300 20 L 190 20 L 190 120',
                'M 191 120 C 230 77 290 81 300 129 C 316 207 248 239 190 205'
              ],
              width: 310,
              audio: 88
            },
            {
              id: '96',
              paths: [
                'M 125 20 Q 40 21 40 71 Q 40 121 125 120',
                'M 125 20 L 125 220',
                'M 271 21 C 190 41 182 142 195 181 C 208 235 306 230 307 177',
                'M 307 177 C 310 149 290 86 190 123'
              ],
              width: 310,
              audio: 90
            },
            {
              id: '97',
              paths: [
                'M 125 20 Q 40 21 40 71 Q 40 121 125 120',
                'M 125 20 L 125 220',
                'M 190 20 L 305 20',
                'M 305 20 L 245 220'
              ],
              width: 310,
              audio: 92
            },
            {
              id: '98',
              paths: [
                'M 125 20 Q 40 21 40 71 Q 40 121 125 120',
                'M 125 20 L 125 220',
                'M 255 20 C 216 20 181 55 214 104 C 227 125 258 127 273 142 C 299 160 303 219 255 220',
                'M 255 220 C 184 221 193 165 212 147 C 229 127 253 111 285 85 C 309 64 297 19 255 20'
              ],
              width: 300,
              audio: 94
            },
            {
              id: '99',
              paths: [
                'M 125 20 Q 40 21 40 71 Q 40 121 125 120',
                'M 125 20 L 125 220',
                'M 275 20 Q 190 21 190 71 Q 190 121 275 120',
                'M 275 20 L 275 220'
              ],
              width: 280,
              audio: 96
            },
            {
              id: '100',
              paths: [
                'M 10 20 L 10 220',
                'M 105 21 C 205 21 205 221 105 221',
                'M 105 221 C 5 221 5 21 105 21',
                'M 275 21 C 375 21 375 221 275 221',
                'M 275 221 C 175 221 175 21 275 21'
              ],
              width: 360,
              audio: 98
            }
          ]
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Identify Numbers',
      id: 'sound-numbers',
      commonData: {
        title: 'Listen to the sound and click on the number.',
        type: 'words',
        audio: 'math/no-1-50.mp3'
      },
      data: [
        {
          audioOffset: 0,
          words: '1, 2, 3, 4, 5, 6, 7, 8, 9, 10'
        },
        {
          audioOffset: 20,
          words: '11, 12, 13, 14, 15, 16, 17, 18, 19, 20'
        },
        {
          audioOffset: 40,
          words: '21, 22, 23, 24, 25, 26, 27, 28, 29, 30'
        },
        {
          audioOffset: 60,
          words: '31, 32, 33, 34, 35, 36, 37, 38, 39, 40'
        },
        {
          audioOffset: 80,
          words: '41, 42, 43, 44, 45, 46, 47, 48, 49, 50'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Identify Numbers - 2',
      id: 'sound-numbers-2',
      commonData: {
        title: 'Listen to the sound and click on the number.',
        type: 'words',
        audio: 'math/no-51-100.mp3'
      },
      data: [
        {
          audioOffset: 0,
          words: '51, 52, 53, 54, 55, 56, 57, 58, 59, 60'
        },
        {
          audioOffset: 20,
          words: '61, 62, 63, 64, 65, 66, 67, 68, 69, 70'
        },
        {
          audioOffset: 40,
          words: '71, 72, 73, 74, 75, 76, 77, 78, 79, 80'
        },
        {
          audioOffset: 60,
          words: '81, 82, 83, 84, 85, 86, 87, 88, 89, 90'
        },
        {
          audioOffset: 80,
          words: '91, 92, 93, 94, 95, 96, 97, 98, 99, 100'
        }
      ]
    }
  ]
};